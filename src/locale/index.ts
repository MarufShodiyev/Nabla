import { createI18n } from "vue-i18n";

import uz from "./messages/uzb.json";
import ru from "./messages/rus.json";
import en from "./messages/eng.json";

export const selectedLocale = localStorage.getItem("lang") || "en";

const messages = {
  uz,
  ru,
  en,
};
const i18n = createI18n({
  locale: selectedLocale,
  legacy: false,
  messages: messages,
});

export default i18n;