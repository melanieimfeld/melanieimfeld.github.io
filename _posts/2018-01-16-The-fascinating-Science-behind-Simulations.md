---
layout: post
title:  "The fascinating Science behind Urban Models"
categories: blog 
tags: datavisualization netlogo london agent-based-modelling simulation
---


<video controls="controls" width="60%" height="auto" 
       name="virtual forest" src="https://raw.githubusercontent.com/melanieimfeld/melanieimfeld.github.io/master/assets/netlogo_mushroomhunt.mp4"></video>

We started looking at agent-based models in class this week. It seems like the concept of modelling natural and social phenomena is as relevant today as it has been since its boom in the 1970ies. It is probably not a concidence that this idea came up in an era that the famous architecture critic Reyner Banham titled as the 'second machine age'. Architects like Hermann Herzberger, Christopher Alexander and the Japanese Metabolists were heavily influenced by mathematics and behavioural sciences - but that's just an architectural side note. I have browsed a bit through the interwebs and I found two models that are particularly interesting from the perspective on an Urban Planner:

### Thomas Schelling's Model of Segregation
In 1971, the economist Thomas Schelling proposed a model to explain observed racial segregation in American cities. Schellings model randomly places individual households, called agents, on a grid. Each household is of either type 'green' or  'red'. Assume a red household observes and counts its field neighbors and their type. If a certain fraction of green neighbors is reached, the red household becomes 'unhappy' and decides to relocate . The relocation might unbalance another section of the environment and can result in a cascade of relocations. Schelling found that a tolerance level of only 0.3 (i.e. 30 % of the neighbors being a different type) leads to clustering of households of the same type. Although Schellings model is disarmingly simple it has been difficult to empirically measure 'happiness'.

### Hotelling's Law
Another cool model is Hotelling's Law (1929), named after economist Harold Hotelling. Hotelling's law examines the optimal placement of stores and pricing of their goods in order to maximize profit. It posits that a consumer takes both distance and price into consideration when choosing a store. Imagine a street with a certain length and consumers uniformly distributed along the street. Each retailer tries to increase its market share by moving along the street or by increasing/decreasing the price based on the consumers willingness to pay a certain price. It seems evident that moving to the center of the street is the optimal position to reach a maximum of consumers. Pricing behaves similar. Therefore, retailers differentiate their location and the price of their goods only little from their competitors. 

Both models can be found in the built-in library of Netlogo, a programming environment for agent-based modelling. Netlogo might not exactly look like the newest fad. Indeed, it was developed in the 90ies by a guy named Uri Wilensky at Northwestern University. We all know that that's a very long time, particuarly if measured in computer time...The user interface definitely is a remnant of another area. However, it is fairly easy to understand and it includes an extensive and well-documented library.
The example I included it a very simple code programmed after an example called Mushroom hunt from the book 'Agent-Based and Individual-Based Modeling: A Practical Introduction' by S.F Railsback and V. Grimm . The goal is to maximize the number of found mushrooms:

1. If a turtle (that's what the arrows are called in Netlogo language) has found a mushroom (red patches) within the last searched 20 patches, let turtle turn at a random angle between -90 and 90. If the turtle is in a cluster of mushrooms it is likelier to find more of them.


```ifelse time-since-last-found <= 20
[right(random 181)-90]
```  

2. If a turtle has not found a mushroom within the last searched 20 patches, let turtle turn right at a random angle between 20-10 degrees. The turtle increases the search radius.


```[right(random 21)-10]
```

#### References
Wilensky, U. (1999). NetLogo. http://ccl.northwestern.edu/netlogo/. Center for Connected Learning and Computer-Based Modeling, Northwestern University, Evanston, IL.


Railsback, S. F., Grimm, V., 2012. Agent-Based and Individual-Based Modeling: A Practical Introduction. Princeton University Press, Princeton, USA.






