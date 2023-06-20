    export const oktaConfig = {
        clientId: '0oa5ugnpf1TJHbEDD697',
        issuer: 'https://trial-3488114.okta.com/oauth2/default',
        redirectUri: 'http://localhost:3000/login/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
        disableHttpsCheck: true,
    }