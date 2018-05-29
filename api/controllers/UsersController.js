/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome':            { action: 'dashboard/view-welcome' },

  //'GET /faq':                { view:   'pages/faq' },
  //'GET /legal/terms':        { view:   'pages/legal/terms' },
  //'GET /legal/privacy':      { view:   'pages/legal/privacy' },
  //'GET /contact':            { view:   'pages/contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  //'GET /email/confirm':      { action: 'entrance/confirm-email' },
  //'GET /email/confirmed':    { view:   'pages/entrance/confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  //'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  //'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  //'GET /account/password':   { action: 'account/view-edit-password' },
  //'GET /account/profile':    { action: 'account/view-edit-profile' },

};

