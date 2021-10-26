import { useRouter } from "next/router";
import { useEffect } from "react";

export default function blogDetail() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, []);

  return <div>blog detail</div>;
}
