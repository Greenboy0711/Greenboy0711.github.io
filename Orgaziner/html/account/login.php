<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login | Orgaziner</title>
  <link rel="icon" type="image/x-icon" href="/images/pngs/orgaziner-logo.png" />
  <link rel="stylesheet" href="/styles/presets/presets.css" />
  <link rel="stylesheet" href="/styles/presets/animations.css" />
  <link rel="stylesheet" href="/styles/account/login.css" />
</head>

<body>
  <div class="title">
    <a href="/html/start/index.php">
      <img class="title-icon" src="/images/pngs/orgaziner-title-icon.png" alt="Orgaziner" /></a>
    <div class="title-websites">
      <button class="sign-up-button top-bar-button">
        <a href="/html/account/sign-up.php">Get Started</a>
      </button>
      <button class="login-button top-bar-button">
        <a href="/html/account/login.php">Login</a>
      </button>
    </div>
  </div>
  <img id="arrow-background1" src="/images/pngs/arrow1-background.png" alt="Orgaziner" />
  <img id="arrow-background2" src="/images/pngs/arrow2-background.png" alt="Orgaziner" />
  <div class="page" id="page-modified">
    <div class="content">
      <img class="logo-icon" src="/images/pngs/orgaziner-logo.png" alt="Orgaziner" />
      <h2 class="content-title">Login</h2>
      <form id="login">
        <h2 class="input-title">Username</h2>
        <input class="input-field" type="text" />
        <h2 class="input-title">Password</h2>
        <input class="input-field" type="password" />
        <button class="login-account-button">Login</button>
      </form>
      <a href="sign-up.php" id="login-link">No account? Sign Up</a>
      <a href="sign-up.php" id="login-link">Forgot Username/Password?</a>
    </div>
  </div>

  <script src="/js/account/login.js"></script>
</body>

</html>