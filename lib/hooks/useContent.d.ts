declare const useContent: ({ baseUrl, token, projectId }: {
    baseUrl: string;
    token: string;
    projectId: string;
}) => {
    content: null;
    isLoading: boolean;
    isLoaded: boolean;
    getEntries: (body: any) => Promise<any>;
};
export default useContent;
