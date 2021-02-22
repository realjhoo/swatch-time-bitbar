# swatch-time-bitbar
## aka Internet Time (a form of decimal time)

On 23 October 1998, Swatch, a watch company based in Switzerland, introduced their own version of decimal time as a marketing ploy. In this system, they divided up the day into 1000 equal parts numbered 000-999 such that, midnight Central European Time (where the company was located) was @000 and noon was @500. Each time unit is called a .beat, which can be further divided into .centibeats and .millibeats.

Although decimal time failed to catch on, it has been proposed several times in one form or another over the last few centuries. Why? Because it is a good idea. Anyone who has ever had to do time math knows that 24 units made up of 60 smaller units, which are in turn made up of 60 even smaller units can be very troublesome. In addition, in this age of global Zoom meetings, ensuring that everyone is clear on the exact time of a proposed meeting can sometimes lack clairity. In addition, in spring and fall, many, but not all, time zones shift for summer time, winter time, standard time or daylight savings time. This can even cause problems inside a single country, for example, when most, but not all, American states shift their time + or - an hour, while neighboring states, or even parts of states, do not.

A single standard, not connected to the current local position of the sun in the sky, would enable meetings and times to be set, regardless of local time. Schedules could be made to an exact number of .millibeats. Spacecraft could be oriented without regard to UTC.

Although some claim that UTC already serves the purpose of international time, the problem is that it is formatted exactly like local time, which leads to errors. And nobody likes errors. 

If the metric system was a good idea 200 years ago, then it is a good idea today. And 200 hundred years ago, decimal time was proposed along with the meter and the liter. The time has come (again). 

This project works with Bitbar/Swiftbar to display the current Internet Time to a precision of .centibeats in your Mac's menu bar.

Enjoy.
