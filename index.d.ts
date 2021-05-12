declare module 'react-native-zendesk-v2' {

  // function to display chat box
  export function startChat(chatOptions: ChatOptions): void;

  // normal init function when you want to use all of the sdks
  export function init(initializationOptins: InitOptions): void;

  // init function when you just want to use chat sdk
  export function initChat(accountKey: string): void;

  // function to set primary color code for the chat theme, pass hex code of the color here
  export function setPrimaryColor(color: string): void;

  // function to display help center UI
  export function showHelpCenter(helpCenterOptions: HelpCenterOptions): void;

  // function to set visitor info in chat
  export function setVisitorInfo(visitorInfo: UserInfo): void;
  
  // function to set user identity
  export function setUserIdentity(visitorInfo: UserInfo): void;

  // function to register notifications token with zendesk
  export function setNotificationToken(token: string): void;
  
  interface ChatOptions {
    botName?: string
    chatOnly?: boolean
    color?: string
    withChat?: boolean
    disableTicketCreation?: boolean
    name?: string
    email?: string
    phone?: number
    department?: string
    tags?: Array<string>
  }

  interface InitOptions {
    // chat key of zendesk account to init chat
    key: string,
    // appId of your zendesk account
    appId: string,
    // clientId of your zendesk account
    clientId: string,
    // support url of zendesk account
    url: string,
  }

  interface UserInfo {
     // user's name
    name: string
    // user's email
    email: string
    // user's phone
    phone?: number
    // department to redirect the chat
    department?: string
    // tags for chat
    tags?: Array<string>
  }


  interface HelpCenterOptions {
    botName?: string
    withChat?: boolean
    disableTicketCreation?: boolean
    sectionIds?: string[]
  }

}
