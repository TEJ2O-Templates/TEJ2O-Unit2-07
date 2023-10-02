/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program is the cookie clicker program.
*/

// variables
let timesClicked = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  timesClicked = timesClicked + 1
  basic.showNumber(timesClicked)
})

input.onButtonPressed(Button.B, function() {
  basic.clearScreen()
  timesClicked = 0
  basic.showNumber(timesClicked)
})
