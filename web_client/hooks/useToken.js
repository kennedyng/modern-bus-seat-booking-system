import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
function useToken() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      const session = await getSession();
      if (session) {
        setToken(session.userData.token);
      }
    };
    getToken();
  }, []);
  return token;
}

export default useToken;
