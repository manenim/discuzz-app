import { Skeleton } from "@nextui-org/react";

const PostShowLoading = () => {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="p-4 border rounded space-y-2">
        <Skeleton className="h6 w32" />
        <Skeleton className="h6 w32" />
        <Skeleton className="h6 w32" />
      </div>
    </div>
  );
};

export default PostShowLoading;
