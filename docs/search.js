// Load and parse the XML file
const parser = new DOMParser();
const xmlString = <elements>
    <element>
        <symbol>H</symbol>
        <name>Hydrogen</name>
        <atomic_number>1</atomic_number>
        <atomic_mass>1.008</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>He</symbol>
        <name>Helium</name>
        <atomic_number>2</atomic_number>
        <atomic_mass>4.0026</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>Li</symbol>
        <name>Lithium</name>
        <atomic_number>3</atomic_number>
        <atomic_mass>6.94</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Be</symbol>
        <name>Beryllium</name>
        <atomic_number>4</atomic_number>
        <atomic_mass>9.0122</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>B</symbol>
        <name>Boron</name>
        <atomic_number>5</atomic_number>
        <atomic_mass>10.81</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>C</symbol>
        <name>Carbon</name>
        <atomic_number>6</atomic_number>
        <atomic_mass>12.011</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>N</symbol>
        <name>Nitrogen</name>
        <atomic_number>7</atomic_number>
        <atomic_mass>14.007</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>O</symbol>
        <name>Oxygen</name>
        <atomic_number>8</atomic_number>
        <atomic_mass>15.999</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>F</symbol>
        <name>Fluorine</name>
        <atomic_number>9</atomic_number>
        <atomic_mass>18.998</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>Ne</symbol>
        <name>Neon</name>
        <atomic_number>10</atomic_number>
        <atomic_mass>20.18</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>Na</symbol>
        <name>Sodium</name>
        <atomic_number>11</atomic_number>
        <atomic_mass>22.99</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Mg</symbol>
        <name>Magnesium</name>
        <atomic_number>12</atomic_number>
        <atomic_mass>24.305</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Al</symbol>
        <name>Aluminium</name>
        <atomic_number>13</atomic_number>
        <atomic_mass>26.982</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Si</symbol>
        <name>Silicon</name>
        <atomic_number>14</atomic_number>
        <atomic_mass>28.085</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>P</symbol>
        <name>Phosphorus</name>
        <atomic_number>15</atomic_number>
        <atomic_mass>30.974</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>S</symbol>
        <name>Sulfur</name>
        <atomic_number>16</atomic_number>
        <atomic_mass>32.06</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Cl</symbol>
        <name>Chlorine</name>
        <atomic_number>17</atomic_number>
        <atomic_mass>35.45</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>Ar</symbol>
        <name>Argon</name>
        <atomic_number>18</atomic_number>
        <atomic_mass>39.95</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>K</symbol>
        <name>Potassium</name>
        <atomic_number>19</atomic_number>
        <atomic_mass>39.098</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ca</symbol>
        <name>Calcium</name>
        <atomic_number>20</atomic_number>
        <atomic_mass>40.078</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Sc</symbol>
        <name>Scandium</name>
        <atomic_number>21</atomic_number>
        <atomic_mass>44.956</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ti</symbol>
        <name>Titanium</name>
        <atomic_number>22</atomic_number>
        <atomic_mass>47.867</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>V</symbol>
        <name>Vanadium</name>
        <atomic_number>23</atomic_number>
        <atomic_mass>50.942</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Cr</symbol>
        <name>Chromium</name>
        <atomic_number>24</atomic_number>
        <atomic_mass>51.996</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Mn</symbol>
        <name>Manganese</name>
        <atomic_number>25</atomic_number>
        <atomic_mass>54.938</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Fe</symbol>
        <name>Iron</name>
        <atomic_number>26</atomic_number>
        <atomic_mass>55.845</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Co</symbol>
        <name>Cobalt</name>
        <atomic_number>27</atomic_number>
        <atomic_mass>58.933</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ni</symbol>
        <name>Nickel</name>
        <atomic_number>28</atomic_number>
        <atomic_mass>58.693</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Cu</symbol>
        <name>Copper</name>
        <atomic_number>29</atomic_number>
        <atomic_mass>63.546</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Zn</symbol>
        <name>Zinc</name>
        <atomic_number>30</atomic_number>
        <atomic_mass>65.38</atomic_mass>
        <phase>solid</phase>
    </element>



    <element>
        <symbol>Ga</symbol>
        <name>Gallium</name>
        <atomic_number>31</atomic_number>
        <atomic_mass>69.723</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ge</symbol>
        <name>Germanium</name>
        <atomic_number>32</atomic_number>
        <atomic_mass>72.63</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>As</symbol>
        <name>Arsenic</name>
        <atomic_number>33</atomic_number>
        <atomic_mass>74.922</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Se</symbol>
        <name>Selenium</name>
        <atomic_number>34</atomic_number>
        <atomic_mass>78.971</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Br</symbol>
        <name>Bromine</name>
        <atomic_number>35</atomic_number>
        <atomic_mass>79.904</atomic_mass>
        <phase>liquid</phase>
    </element>
    <element>
        <symbol>Kr</symbol>
        <name>Krypton</name>
        <atomic_number>36</atomic_number>
        <atomic_mass>83.798</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>Rb</symbol>
        <name>Rubidium</name>
        <atomic_number>37</atomic_number>
        <atomic_mass>85.468</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Sr</symbol>
        <name>Strontium</name>
        <atomic_number>38</atomic_number>
        <atomic_mass>87.62</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Y</symbol>
        <name>Yttrium</name>
        <atomic_number>39</atomic_number>
        <atomic_mass>88.906</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Zr</symbol>
        <name>Zirconium</name>
        <atomic_number>40</atomic_number>
        <atomic_mass>91.224</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Nb</symbol>
        <name>Niobium</name>
        <atomic_number>41</atomic_number>
        <atomic_mass>92.906</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Mo</symbol>
        <name>Molybdenum</name>
        <atomic_number>42</atomic_number>
        <atomic_mass>95.95</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Tc</symbol>
        <name>Technetium</name>
        <atomic_number>43</atomic_number>
        <atomic_mass>97</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ru</symbol>
        <name>Ruthenium</name>
        <atomic_number>44</atomic_number>
        <atomic_mass>101.07</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Rh</symbol>
        <name>Rhodium</name>
        <atomic_number>45</atomic_number>
        <atomic_mass>102.91</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Pd</symbol>
        <name>Palladium</name>
        <atomic_number>46</atomic_number>
        <atomic_mass>106.42</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ag</symbol>
        <name>Silver</name>
        <atomic_number>47</atomic_number>
        <atomic_mass>107.87</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Cd</symbol>
        <name>Cadmium</name>
        <atomic_number>48</atomic_number>
        <atomic_mass>112.41</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>In</symbol>
        <name>Indium</name>
        <atomic_number>49</atomic_number>
        <atomic_mass>114.82</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Sn</symbol>
        <name>Tin</name>
        <atomic_number>50</atomic_number>
        <atomic_mass>118.71</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Sb</symbol>
        <name>Antimony</name>
        <atomic_number>51</atomic_number>
        <atomic_mass>121.76</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Te</symbol>
        <name>Tellurium</name>
        <atomic_number>52</atomic_number>
        <atomic_mass>127.6</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>I</symbol>
        <name>Iodine</name>
        <atomic_number>53</atomic_number>
        <atomic_mass>126.9</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Xe</symbol>
        <name>Xenon</name>
        <atomic_number>54</atomic_number>
        <atomic_mass>131.29</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>Cs</symbol>
        <name>Caesium</name>
        <atomic_number>55</atomic_number>
        <atomic_mass>132.91</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ba</symbol>
        <name>Barium</name>
        <atomic_number>56</atomic_number>
        <atomic_mass>137.33</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>La</symbol>
        <name>Lanthanum</name>
        <atomic_number>57</atomic_number>
        <atomic_mass>138.91</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ce</symbol>
        <name>Cerium</name>
        <atomic_number>58</atomic_number>
        <atomic_mass>140.12</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Pr</symbol>
        <name>Praseodymium</name>
        <atomic_number>59</atomic_number>
        <atomic_mass>140.91</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Nd</symbol>
        <name>Neodymium</name>
        <atomic_number>60</atomic_number>
        <atomic_mass>144.24</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Pm</symbol>
        <name>Promethium</name>
        <atomic_number>61</atomic_number>
        <atomic_mass>145</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Sm</symbol>
        <name>Samarium</name>
        <atomic_number>62</atomic_number>
        <atomic_mass>150.36</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Eu</symbol>
        <name>Europium</name>
        <atomic_number>63</atomic_number>
        <atomic_mass>151.96</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Gd</symbol>
        <name>Gadolinium</name>
        <atomic_number>64</atomic_number>
        <atomic_mass>157.25</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Tb</symbol>
        <name>Terbium</name>
        <atomic_number>65</atomic_number>
        <atomic_mass>158.93</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Dy</symbol>
        <name>Dysprosium</name>
        <atomic_number>66</atomic_number>
        <atomic_mass>162.5</atomic_mass>
        <phase>solid</phase>
    </element>
   <element>
        <symbol>Ho</symbol>
        <name>Holmium</name>
        <atomic_number>67</atomic_number>
        <atomic_mass>164.93</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Er</symbol>
        <name>Erbium</name>
        <atomic_number>68</atomic_number>
        <atomic_mass>167.26</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Tm</symbol>
        <name>Thulium</name>
        <atomic_number>69</atomic_number>
        <atomic_mass>168.93</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Yb</symbol>
        <name>Ytterbium</name>
        <atomic_number>70</atomic_number>
        <atomic_mass>173.05</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Lu</symbol>
        <name>Lutetium</name>
        <atomic_number>71</atomic_number>
        <atomic_mass>174.97</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Hf</symbol>
        <name>Hafnium</name>
        <atomic_number>72</atomic_number>
        <atomic_mass>178.49</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ta</symbol>
        <name>Tantalum</name>
        <atomic_number>73</atomic_number>
        <atomic_mass>180.95</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>W</symbol>
        <name>Tungsten</name>
        <atomic_number>74</atomic_number>
        <atomic_mass>183.84</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Re</symbol>
        <name>Rhenium</name>
        <atomic_number>75</atomic_number>
        <atomic_mass>186.21</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Os</symbol>
        <name>Osmium</name>
        <atomic_number>76</atomic_number>
        <atomic_mass>190.23</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ir</symbol>
        <name>Iridium</name>
        <atomic_number>77</atomic_number>
        <atomic_mass>192.22</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Pt</symbol>
        <name>Platinum</name>
        <atomic_number>78</atomic_number>
        <atomic_mass>195.08</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Au</symbol>
        <name>Gold</name>
        <atomic_number>79</atomic_number>
        <atomic_mass>196.97</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Hg</symbol>
        <name>Mercury</name>
        <atomic_number>80</atomic_number>
        <atomic_mass>200.59</atomic_mass>
        <phase>liquid</phase>
    </element>
    <element>
        <symbol>Tl</symbol>
        <name>Thallium</name>
        <atomic_number>81</atomic_number>
        <atomic_mass>204.38</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Pb</symbol>
        <name>Lead</name>
        <atomic_number>82</atomic_number>
        <atomic_mass>207.2</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Bi</symbol>
        <name>Bismuth</name>
        <atomic_number>83</atomic_number>
        <atomic_mass>208.98</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Po</symbol>
        <name>Polonium</name>
        <atomic_number>84</atomic_number>
        <atomic_mass>209</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>At</symbol>
        <name>Astatine</name>
        <atomic_number>85</atomic_number>
        <atomic_mass>210</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Rn</symbol>
        <name>Radon</name>
        <atomic_number>86</atomic_number>
        <atomic_mass>222</atomic_mass>
        <phase>gas</phase>
    </element>
    <element>
        <symbol>Fr</symbol>
        <name>Francium</name>
        <atomic_number>87</atomic_number>
        <atomic_mass>223</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Ra</symbol>
        <name>Radium</name>
        <atomic_number>88</atomic_number>
        <atomic_mass>226</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Ac</symbol>
        <name>Actinium</name>
        <atomic_number>89</atomic_number>
        <atomic_mass>227</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Th</symbol>
        <name>Thorium</name>
        <atomic_number>90</atomic_number>
        <atomic_mass>232.04</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Pa</symbol>
        <name>Protactinium</name>
        <atomic_number>91</atomic_number>
        <atomic_mass>231.04</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>U</symbol>
        <name>Uranium</name>
        <atomic_number>92</atomic_number>
        <atomic_mass>238.03</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Np</symbol>
        <name>Neptunium</name>
        <atomic_number>93</atomic_number>
        <atomic_mass>237</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Pu</symbol>
        <name>Plutonium</name>
        <atomic_number>94</atomic_number>
        <atomic_mass>244</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Am</symbol>
        <name>Americium</name>
        <atomic_number>95</atomic_number>
        <atomic_mass>243</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Cm</symbol>
        <name>Curium</name>
        <atomic_number>96</atomic_number>
        <atomic_mass>247</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Bk</symbol>
        <name>Berkelium</name>
        <atomic_number>97</atomic_number>
        <atomic_mass>247</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Cf</symbol>
        <name>Californium</name>
        <atomic_number>98</atomic_number>
        <atomic_mass>251</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Es</symbol>
        <name>Einsteinium</name>
        <atomic_number>99</atomic_number>
        <atomic_mass>252</atomic_mass>
        <phase>solid</phase>
    </element>
    <element>
        <symbol>Fm</symbol>
        <name>Fermium</name>
        <atomic_number>100</atomic_number>
        <atomic_mass>257</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Md</symbol>
        <name>Mendelevium</name>
        <atomic_number>101</atomic_number>
        <atomic_mass>258</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>No</symbol>
        <name>Nobelium</name>
        <atomic_number>102</atomic_number>
        <atomic_mass>259</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Lr</symbol>
        <name>Lawrencium</name>
        <atomic_number>103</atomic_number>
        <atomic_mass>266</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Rf</symbol>
        <name>Rutherfordium</name>
        <atomic_number>104</atomic_number>
        <atomic_mass>267</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Db</symbol>
        <name>Dubnium</name>
        <atomic_number>105</atomic_number>
        <atomic_mass>268</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Sg</symbol>
        <name>Seaborgium</name>
        <atomic_number>106</atomic_number>
        <atomic_mass>269</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Bh</symbol>
        <name>Bohrium</name>
        <atomic_number>107</atomic_number>
        <atomic_mass>270</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Hs</symbol>
        <name>Hassium</name>
        <atomic_number>108</atomic_number>
        <atomic_mass>269</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Mt</symbol>
        <name>Meitnerium</name>
        <atomic_number>109</atomic_number>
        <atomic_mass>278</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Ds</symbol>
        <name>Darmstadtium</name>
        <atomic_number>110</atomic_number>
        <atomic_mass>281</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Rg</symbol>
        <name>Roentgenium</name>
        <atomic_number>111</atomic_number>
        <atomic_mass>282</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Cn</symbol>
        <name>Copernicium</name>
        <atomic_number>112</atomic_number>
        <atomic_mass>285</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Nh</symbol>
        <name>Nihonium</name>
        <atomic_number>113</atomic_number>
        <atomic_mass>286</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Fl</symbol>
        <name>Flerovium</name>
        <atomic_number>114</atomic_number>
        <atomic_mass>289</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Mc</symbol>
        <name>Moscovium</name>
        <atomic_number>115</atomic_number>
        <atomic_mass>290</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Lv</symbol>
        <name>Livermorium</name>
        <atomic_number>116</atomic_number>
        <atomic_mass>293</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Ts</symbol>
        <name>Tennessine</name>
        <atomic_number>117</atomic_number>
        <atomic_mass>294</atomic_mass>
        <phase>unknown</phase>
    </element>
    <element>
        <symbol>Og</symbol>
        <name>Oganesson</name>
        <atomic_number>118</atomic_number>
        <atomic_mass>294</atomic_mass>
        <phase>unknown</phase>
    </element>
</elements>;
const xmlDoc = parser.parseFromString(xmlString, "text/xml"); // Replace with the path to your XML file

const form = document.getElementById('elementSearchForm');
const searchInput = document.getElementById('searchInput');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();
    const elements = xmlDoc.getElementsByTagName('element');

    for (let i = 0; i < elements.length; i++) {
        const symbol = elements[i].getElementsByTagName('symbol')[0].textContent.toLowerCase();
        const name = elements[i].getElementsByTagName('name')[0].textContent.toLowerCase();

        if (symbol === searchValue || name === searchValue) {
            // Match found, display the entry
            const atomicNumber = elements[i].getElementsByTagName('atomic_number')[0].textContent;
            const atomicMass = elements[i].getElementsByTagName('atomic_mass')[0].textContent;
            const phase = elements[i].getElementsByTagName('phase')[0].textContent;

            const resultMessage = `
                Element found:
                Symbol: ${symbol}
                Name: ${name}
                Atomic Number: ${atomicNumber}
                Atomic Mass: ${atomicMass}
                Phase: ${phase}
            `;
            resultDiv.textContent = resultMessage;
            return;
        }
    }

    // No match found, display an error message
    resultDiv.textContent = 'Element not found.';
});

