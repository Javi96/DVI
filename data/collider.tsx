<?xml version="1.0" encoding="UTF-8"?>
<tileset name="collider" tilewidth="8" tileheight="8" tilecount="400" columns="20">
 <image source="../images/collider.png" width="160" height="160"/>
 <tile id="0">
  <properties>
   <property name="Class" value="Collider"/>
   <property name="collision" type="bool" value="true"/>
   <property name="from" value="houseLinkMap"/>
   <property name="to" value="houseLinkForestMap"/>
   <property name="xLink" type="int" value="703"/>
   <property name="yLink" type="int" value="291"/>
  </properties>
 </tile>
 <tile id="1">
  <properties>
   <property name="Class" value="Collider"/>
   <property name="collision" type="bool" value="true"/>
   <property name="from" value="houseLinkForestMap"/>
   <property name="to" value="houseLinkMap"/>
   <property name="xLink" type="int" value="114"/>
   <property name="yLink" type="int" value="147"/>
  </properties>
 </tile>
</tileset>
