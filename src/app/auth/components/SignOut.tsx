"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { QueryClient } from "@tanstack/react-query";

const SignOut = () => {
  const handleSignOut = async () => {};

  const queryClient = new QueryClient();

  return (
    <form action={handleSignOut}>
      <Button
        type="submit"
        onClick={() => {
          queryClient.removeQueries({
            queryKey: [`user-session`],
            exact: true,
          });
        }}
        className="h-7 w-full px-2"
      >
        Sign Out
      </Button>
    </form>
  );
};

export default SignOut;
