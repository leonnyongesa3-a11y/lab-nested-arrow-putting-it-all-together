let userInfo = {
  username: "user1",
  password: "password123",
};

function createLoginTracker(userInfo) {
  console.log(`userInfo: ${userInfo}`);
  let attemptCount = 0;

  return (LoginAttempt = (passwordAttempt) => {
    attemptCount += 1;

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Login successful";
    } else {if (attemptCount <= 3) {
          return `Attempt ${attemptCount}: Login failed`;
        } else {
          if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
          }
        }
      }
    });
  }



module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
