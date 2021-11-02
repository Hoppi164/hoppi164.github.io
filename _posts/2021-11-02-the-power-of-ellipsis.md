# The Power Of Ellipsis
Responsiveness is a concern that should be front and center for any modern front-end developer.  
Your site should look brilliant on all screens; large and small


I often encounter situations where i need to display lots of content within an element, which causes a very ugly render on small screens.  
This often occurs when trying to present data in a table like in the example below.
### This table looks bad on mobile
<table>
  <thead>
    <tr>
      <th> ID </th>
      <th> Real Name </th>
      <th> Superhero Name </th>
      <th> Power </th>
      <th> Quote </th>
    </tr>
  </thead>
 
  <tbody>
    <tr>
      <td> 0 </td>
      <td> Tony Stark </td>
      <td> Iron Man </td>
      <td> Genius level scientist with a Super Powered suit of armor </td>
      <td> JARVIS, make a note. Remind me not to wake up in the morning ever again. </td>
    </tr>
    <tr>
      <td> 1 </td>
      <td> Natasha Romanoff </td>
      <td> Black Widow </td>
      <td> Master in the covert arts of espionage, infiltration, and subterfuge </td>
      <td> "I Could Have Been More Famous Than Captain America" </td>
    </tr>
    <tr>
      <td> 2 </td>
      <td> Carol Danvers </td>
      <td> Captain Marvel  </td>
      <td> Photon Energy absorbed from the Tesseract granting her enhanced strength, stamina, agility, durability, and flight </td>
      <td> "Higher, further, faster, baby.” </td>
    </tr>
    <tr>
      <td> 3 </td>
      <td> Peter Parker </td>
      <td> Spider-Man </td>
      <td> Abilities gained from radioactive spider bite: Superhuman strength, agility, endurance, ability to stick to and climb walls and other surfaces </td>
      <td> "With great power, comes great responsibility." </td>
    </tr>
   
  </tbody>
 </table>
 
<br>
<br>


This table looks clean and tidy on a large screen, but on smaller devices the large amount of text will quickly take up the entire window.  
My favorite way to solve this problem is to only display the first few characters in the paragraph, and replace the overflow with "ellipsis..."  

This allows us to view the full text on large screens, and just the first bit of the text on small screens
You can see this in action with the sample below:


### This table looks good on both desktop and mobile
<table>
  <thead>
    <tr>
      <th> ID </th>
      <th> Real Name </th>
      <th> Superhero Name </th>
      <th> Power </th>
      <th> Quote </th>
    </tr>
  </thead>
 
  <tbody>
    <tr>
      <td> 0 </td>
      <td> Tony Stark </td>
      <td> Iron Man </td>
      <td style="overflow: hidden; max-width: 200px; text-overflow: ellipsis; white-space: nowrap;"> Genius level scientist with a Super Powered suit of armor </td>
      <td style="overflow: hidden; max-width: 200px; text-overflow: ellipsis; white-space: nowrap;"> JARVIS, make a note. Remind me not to wake up in the morning ever again. </td>
    </tr>
    <tr>
      <td> 1 </td>
      <td> Natasha Romanoff </td>
      <td> Black Widow </td>
      <td style="overflow: hidden; max-width: 200px; text-overflow: ellipsis; white-space: nowrap;"> Master in the covert arts of espionage, infiltration, and subterfuge </td>
      <td style="overflow: hidden; max-width: 200px; text-overflow: ellipsis; white-space: nowrap;"> "I Could Have Been More Famous Than Captain America" </td>
    </tr>
    <tr>
      <td> 2 </td>
      <td> Carol Danvers </td>
      <td> Captain Marvel  </td>
      <td style="overflow: hidden; max-width: 200px; text-overflow: ellipsis; white-space: nowrap;"> Photon Energy absorbed from the Tesseract granting her enhanced strength, stamina, agility, durability, and flight </td>
      <td style="overflow: hidden; max-width: 200px; text-overflow: ellipsis; white-space: nowrap;"> "Higher, further, faster, baby.” </td>
    </tr>
    <tr>
      <td> 3 </td>
      <td> Peter Parker </td>
      <td> Spider-Man </td>
      <td style="overflow: hidden; max-width: 200px; text-overflow: ellipsis; white-space: nowrap;"> Abilities gained from radioactive spider bite: Superhuman strength, agility, endurance, ability to stick to and climb walls and other surfaces</td>
      <td style="overflow: hidden; max-width: 200px; text-overflow: ellipsis; white-space: nowrap;"> "With great power, comes great responsibility." </td>
    </tr>
   
  </tbody>
 </table>



#### HOLY MOLEY!
**_Thats a dramatic difference on mobile devices_**  
This technique prioritizes the readability of the table and effectively "Drops" the leftover information.


To accomplish this effect you can add this small CSS class to your code which specifies the text has at most 25 characters, all remaining characters will be replaced with an ellipsis "..."

```html
<style>
.ellipsis{
  overflow: hidden;
  max-width: 40ch;
  text-overflow: ellipsis;
}
</style>
```


you can then use this class within your html document like so:
```html
<td class="ellipsis"> Photon Energy absorbed from the Tesseract granting her enhanced strength, stamina, agility, durability, and flight </td>

```

Alternatively if you are already using a frontend framework: there's a strong chance this class has already been implemented for you.  
| Framework | Example Use |
| ----------| ------------|
| Bootstrap | `<p class="text-truncate"> very very very very very long text </p>` |
| Quasar | `<p class="ellipsis"> very very very very very long text </p>` |
| Tailwind | `<p class="truncate"> very very very very very long text </p>` |

