import React, { useState, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import German from '../languages/de.json';
import English from '../languages/en-US.json';

export const Context = createContext();
const local = navigator.language;

let lang;
if (local === 'de') {
  lang = German;
} else {
  lang = English;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLang(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === 'en-US') {
      setMessages(English);
    } else {
      setMessages(German);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
