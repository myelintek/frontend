const name = window.FileBrowser.Name || 'File Browser'
const disableExternal = window.FileBrowser.DisableExternal
const baseURL = window.FileBrowser.BaseURL
const staticURL = window.FileBrowser.StaticURL
const recaptcha = window.FileBrowser.ReCaptcha
const recaptchaKey = window.FileBrowser.ReCaptchaKey
const signup = window.FileBrowser.Signup
const version = window.FileBrowser.Version
const logoURL = `/${staticURL}/img/logo.svg`
const noAuth = window.FileBrowser.NoAuth
const loginPage = window.FileBrowser.LoginPage
const embededMode = window.FileBrowser.EmbededMode

export {
  name,
  disableExternal,
  baseURL,
  logoURL,
  recaptcha,
  recaptchaKey,
  signup,
  version,
  noAuth,
  loginPage,
  embededMode,
}
