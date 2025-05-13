// components/withAuth.tsx
import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithAuth = (props: P) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) return <div>Loading...</div>;

    if (!user) {
      router.push("/login"); // or wherever your login page is
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
