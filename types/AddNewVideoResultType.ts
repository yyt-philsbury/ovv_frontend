export type AddNewVideoResultType = {
  isNewVideo: boolean;
  video: {
    added_on: string;
    author: string;
    id: string;
    original_upload_date: string;
    title: string;
    views: number;
  };
};
