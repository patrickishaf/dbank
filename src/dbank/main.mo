import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var accountBalance: Float = 300;
  accountBalance := 100;

  stable var startTime: Int = Time.now();

  public func topUp(amount: Float) {
    accountBalance += amount;
    Debug.print(debug_show(accountBalance));
  };

  public func withdraw(amount: Float) {
    let withDrawal: Float = accountBalance - amount;
    if (amount <= accountBalance) {
      accountBalance -= amount;
      Debug.print(debug_show(accountBalance));
    } else {
      Debug.print("You don't have up to that amount in your account fam")
    }
  };

  public query func getbalance(): async Float {
    return accountBalance;
  };

  public func printTime() {
    var timeNow = Time.now();
    Debug.print(debug_show(timeNow));
  };

  public func compound() {
    var currentTime: Int = Time.now();
    var elapsedTime = currentTime - startTime;
    var elapsedSeconds = elapsedTime / 1000000000;
    accountBalance := accountBalance * ((1.01) ** Float.fromInt(elapsedSeconds));
    startTime := currentTime;
  };
}