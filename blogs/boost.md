# Boost:
In this project i wanted to make a high efficiency boost converter for another project. 
I first had to make a adjustable frequency and dudy cycle from an mcu so i went with the attiny406 i had on hand i then spend a couple of day making a serilial console for the frequency generator (timmer) in the mcu so i could do some tests. I made a couple of scripts to graph the frequncy and dudy cycle compared to efficiency( in this case voltage with a constant load) in this fasstion it seemed all over the place but i had an idea. If the magnetic flux of the inductor is helt at its max for too long it will loose power in the form of heat, but if i hold it too short i wont have enough power stored to keep a stable voltage.sso my theory was if i charge it to the 99% of the magnetic flux it should be the most efficientnt right? Well i was partially right when i changed the graph to charge time the max efficiency’s clustered around a time of ⅓ or e^-1 (within marin of eror ) so now i knew if i kept the charge time to about the solution to: (3 (1 - e^(-(x R)/L)) - 1)/R = 0 i should get the best efficiency. So i did that i coded it up in c and made a boost converted out of it. Unfortunately the mcu isnt fast enough to get the max efficiency for small inductorys in the 10’s of micro henerys but it gets better as u go to the milihenerys. I could only get about 50 volts from my boost converter so i just added a 6 stage voltage doubler to the output and made an aductable Vin- 500V boost converter. PICURE of Schematic 