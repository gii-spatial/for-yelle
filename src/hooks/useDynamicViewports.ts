import { useCallback, useEffect, useState } from "react";

type GetDynamicViewPortFN = (value: number | string) => string;

interface UseDynamicViewPortsProps {
  supportsDvh: boolean;
  supportsDvw: boolean;
  getDvHeight: GetDynamicViewPortFN;
  getDvWidth: GetDynamicViewPortFN;
}

export default function useDynamicViewPorts(): UseDynamicViewPortsProps {
  const [supportsDvh, setSupportsDvh] = useState(false);
  const [supportsDvw, setSupportsDvw] = useState(false);

  useEffect(() => {
    setSupportsDvh(CSS.supports("height", "100dvh"));
    setSupportsDvw(CSS.supports("width", "100dvw"));
  }, []);

  const getDvHeight = useCallback<GetDynamicViewPortFN>(
    (value) => `${value}`.concat(supportsDvh ? "dvh" : "vh"),
    [supportsDvh]
  );

  const getDvWidth = useCallback<GetDynamicViewPortFN>(
    (value) => `${value}`.concat(supportsDvw ? "dvw" : "vw"),
    [supportsDvw]
  );

  return {
    supportsDvh,
    supportsDvw,
    getDvHeight,
    getDvWidth,
  };
}
