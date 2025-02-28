import { useEffect, useState } from "react";
import MiniNav from "./navbar/mini-nav";

function MiniNavProvider() {
  const [isFixedVisible, setIsFixedVisible] = useState(true);

  return <MiniNav isFixedVisible={isFixedVisible} navbarColor="solidBg" />;
}

export default MiniNavProvider;




