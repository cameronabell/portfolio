import { useEffect } from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { db, useSocialsStore } from "shared";

export function useSocials() {
    const { socials, setSocials } = useSocialsStore();

    const { isFetching, data, error, refetch, isFetched } = useQuery(
        ['socials'],
        async () => {
            const querySnapshot = await getDocs(collection(db, "socials"));
            const results = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return results;
        }
    )

    useEffect(() => {
        if (!socials && !isFetching) {
            refetch();
        }
    }, [socials, isFetching, refetch]);

    useEffect(() => {
        if (data) {
            setSocials(data);
        }
    }, [data, setSocials]);

    return {
        isFetching,
        socials,
        error,
        isError: error != null,
        refetch,
        isFetched,
    };
}