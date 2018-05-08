---
layout: post
title:  "Can we use Machine Learning to predict building functions?"
categories: blog 
tags: datavisualization processing 3D london data machinelearning
---


<img style="float: center;" src="https://raw.githubusercontent.com/melanieimfeld/melanieimfeld.github.io/master/assets/footprint.png">

The architect and skyscraper pioneer Louis Sullivan coined the famous axiom “form follows function” and with the rise of Modernism in the 1920s, it became the touchstone for many architects. Although Sullivan meant to advocate against ornamentation in architecture, it can also be interpreted as the relation between architectural shape and human activities.

Indeed many buildings are restricted by their function: Residential building footprints can only be of limited depth to ensure natural lighting. Industrial buildings often are of a simple shape as they do not have any representative function besides their industrial purpose. The aim of this coursework is to investigate if the function of a building can be predicted based on its geometrical attributes and year built by using supervised machine learning techniques. Supervised learning consists in learning the link between two datasets: the observed data X and an external variable y that we are trying to predict, usually called “target” or “labels”. Extensive data about building functions is rare. Therefore, such machine learning techniques could be used to identify the function of buildings where data is not readily accessible.

The dataset used in this coursework contains all buildings in the City of Hamburg that were registered in 2016. It includes the polygons, functions, number of floors, as well as the roof and the construction types. The entire GML file can be downloaded here and metadata can be found here. For the purpose of this analysis some extra features were added in QGIS, which are described in detail in chapter four. They are based on the research put forth by Michael Wurm (2016), who also suggested the use of this dataset and also provided me with Python scripts to read the GML files.

Have a look at the code and my findings here:
<b> <a href="https://github.com/melanieimfeld/BuildingTypeClassificationSciKit" >Github Repo</a> </b>


--------------
Wurm, M., Schmitt, A., Taubenböck, H.(2016). Building Types’ Classification Using Shape-Based Features and Linear Discriminant Functions. IEEE JOURNAL OF SELECTED TOPICS IN APPLIED EARTH OBSERVATIONS AND REMOTE SENSING



