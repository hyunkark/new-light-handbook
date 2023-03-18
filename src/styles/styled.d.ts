import "styled-components";
import { COLORTYPE } from "@/constants/COLOR";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: COLORTYPE;
  }
}
