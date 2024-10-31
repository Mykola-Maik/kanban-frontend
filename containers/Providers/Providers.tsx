import store from "@/redux/store";
import theme from "@/styles/muiTheme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </MuiThemeProvider>
  );
};
