import decode from "jwt-decode";

class AuthService {
  loggedIn() {
    const token = this.getToken();
    // If there's a token and it hasn't expired yet, return true. Else, return false
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token in order to get its expiration time that was set by the server
    const decoded = decode(token);

    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }
}
