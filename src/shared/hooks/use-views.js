import { useEffect } from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { db, useViewsStore } from "shared";

export function useViews() {
    const { resume, setResume } = useViewsStore();

    const { isFetching, data, error, refetch, isFetched } = useQuery(
        ["views"],
        async () => {
            const querySnapshot = await getDocs(collection(db, "views"));
            const results = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return results;
        }
    );

    useEffect(() => {
        if (!resume && !isFetching) {
            refetch();
        }
    }, [resume, isFetching, refetch]);

    useEffect(() => {
        if (data) {
            data.forEach((doc) => {
                switch (doc.id) {
                    case "resume":
                        setResume(doc);
                        break;
                    default:
                        break;
                }
            });
        }
    }, [data, setResume]);

    return {
        isFetching,
        resume,
        error,
        isError: error != null,
        refetch,
        isFetched,
    };
}
