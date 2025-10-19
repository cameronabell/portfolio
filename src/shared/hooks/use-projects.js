import { useEffect } from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "shared";
import { useProjectsStore } from "shared/stores/projects-store";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "shared";

export function useProjects() {
    const { projects, setProjects } = useProjectsStore();

    const { isFetching, data, error, refetch, isFetched } = useQuery(
        ["projects"],
        async () => {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const results = await Promise.all(
                querySnapshot.docs.map(async (doc) => {
                    const data = doc.data();
                    const imageRef = ref(storage, data?.images[0]);
                    let url;

                    // Check if the image URL is already cached in local storage
                    const cachedUrl = localStorage.getItem(doc.id);
                    if (cachedUrl) {
                        url = cachedUrl;
                    } else {
                        url = await getDownloadURL(imageRef);
                        // Cache the image URL in local storage
                        localStorage.setItem(doc.id, url);
                    }

                    return {
                        id: doc.id,
                        featuredImageUrl: url,
                        ...data,
                    };
                })
            );
            return results.sort((a, b) => b.publishedDate - a.publishedDate);
        }
    );

    useEffect(() => {
        if (!projects && !isFetching) {
            refetch();
        }
    }, [projects, isFetching, refetch]);

    useEffect(() => {
        if (data) {
            setProjects(data);
        }
    }, [data, setProjects]);

    return {
        isFetching,
        projects,
        error,
        isError: error != null,
        refetch,
        isFetched,
    };
}
