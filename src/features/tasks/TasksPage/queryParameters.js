import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(searchQueryParamName);
};

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();

    return ({ key: searchQueryParamName, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};