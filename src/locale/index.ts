import { createI18n } from "vue-i18n";

import uz from "./messages/uz.json";
import ru from "./messages/ru.json";
import en from "./messages/en.json";

export const selectedLocale = localStorage.getItem("lang") || "en";

const messages = {
  uz,
  ru,
  en
};
const i18n = createI18n({
  locale: selectedLocale,
  legacy: false,
  messages: messages,
});

export default i18n;