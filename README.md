# Fetch Coding Exercise SDET

# The Problem to be Solved
##  Given a balance scale and 9 gold bars of the same size and look. You don't know the exact **weight** of each bar, but you know they all weigh the same, except for one fake bar. The fake bar weighs **less** than the others. You need to find the fake gold bar by using the balance scales and the other gold bars. You can only place gold bars on the scale plates (bowls) and find which scale weighs more or less. 

# The Task
1. We need to be able to find the **best** algorithm (mimnimum number of weighinbs for any possible fake bar position) that differentiates the fake gold bar. 
2. Create a test automation project using any preferred language to perform the following:
a. Clicks on buttons ("Weigh", "Reset")
b. Getting the measurement results (field between the 'bowls') represented by Result button (it is not clickable to perform any actions, it will only give <', '>', or '=')
c. Filling out the bowls with bar numbers (0 to 8)
d. Getting a list of weighing (shown on the right of the bowls under 'Weighings')
e. Clicking on the gold bar number at the bottom of the website and checking for the alert message
3. Code the algorithm from step 1 which uses a set of actions from step 2 to find the fake gold bar.

# The approach 
The best algorithm to approach this task is to first divide the 9 gold bars into group of threes. Although the balancing scale only has two bowls, having three groups of gold bars is the best approach since two groups can be weighed first and depending on that result, that result will give us conclusive information about the third group. 
To visualize this algorithm, here are 9 gold bars that are represented by the problem: [0],[1],[2],[3],[4],[5],[6],[7],[8]
If we divide into three groups, we can see them separated as such: 
- Group 1: [0],[1],[2]
- Group 2: [3],[4],[5]
- Group 3: [6],[7],[8]

There are 3 possibilities we get from weighing the gold bars in these groups :

Result 1:
|0|1|2|     |3|4|5|
| | | |  >  | | | |
| | | |     | | | |

This means that all the gold bars in this weighing are not the same weight and we can see that if group [0],[1],[2] is heavier than group [3],[4],[5], we know that the fake gold bar is in group [3],[4],[5]. This will conclude that all the gold bars in group [6],[7],[8] are the same weight.

Result 2:
|0|1|2|     |3|4|5|
| | | |  <  | | | |
| | | |     | | | |

This means that all the gold bars in this weighing are not the same weight and we can see that if group [0],[1],[2] is lighter than group [3],[4],[5], we know that the fake gold bar is in group [0],[1],[2]. This will conclude that all the gold bars in group [6],[7],[8] are the same weight.

Result 3:
|0|1|2|     |3|4|5|
| | | |  =  | | | |
| | | |     | | | |

This means that all the gold bars in this weighing are  the same weigh, meaning the fake gold bar is not in group [0],[1],[2] or group [3],[4],[5]. This will also conclude that all the gold bars in group [6],[7],[8] are not the same weight, meaning the fake gold bar is within this group.

Now that we can narrowed down the group of gold bars the fake one is within, we repeat the same algorithm once more to come to the fake gold bar in just 2 iterations. 

Let's say for example the group with the fake gold bar is group [3], [4], [5], we can separate the weighing as such to come to the solution. 

Result 1:
|Left Bowl| 
|:--:     |    
| 3 |   |   |       | 4 |   |   |
|---|---|---|   >   |---|---|---| 
|   |   |   |       |   |   |   |
|   |   |   |       |   |   |   | 

This concludes that gold bar [4] is the fake gold bar, since the fake gold bar is known to be lighter than the others. 

Result 2:
|3| | |     |4| | |
| | | |  <  | | | |
| | | |     | | | |

This concludes that gold bar [3] is the fake gold bar, since the fake gold bar is known to be lighter than the others. 

Result 3:
|3| | |     |4| | |
| | | |  =  | | | |
| | | |     | | | |

This concludes that gold bar [5] is the fake gold bar, since [3] and [4] are equal weights and the fake gold bar is known to be lighter than the others. 