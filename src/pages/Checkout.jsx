import CustomIcon from "../assets/icon/CustomIcon";
import EmailField from "../component/Common/Form/EmailField";
import SelectField from "../component/Common/Form/SelectField";
import TextAreaField from "../component/Common/Form/TextAreaFields";
import TextField from "../component/Common/Form/TextField";
import SectionTitle from "../component/Common/SectionTitle";
import stripeImg from "../assets/checkout/Stripe.png";

const Checkout = () => {
  const countryList = [
    { value: "AF", label: "Afghanistan" },
    { value: "AX", label: "Åland Islands" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BQ", label: "Bonaire, Sint Eustatius and Saba" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BV", label: "Bouvet Island" },
    { value: "BR", label: "Brazil" },
    { value: "IO", label: "British Indian Ocean Territory" },
    { value: "BN", label: "Brunei Darussalam" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "CV", label: "Cabo Verde" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "KY", label: "Cayman Islands" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CX", label: "Christmas Island" },
    { value: "CC", label: "Cocos (Keeling) Islands" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo" },
    { value: "CD", label: "Congo, Democratic Republic of the" },
    { value: "CK", label: "Cook Islands" },
    { value: "CR", label: "Costa Rica" },
    { value: "CI", label: "Côte d'Ivoire" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CW", label: "Curaçao" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "SZ", label: "Eswatini" },
    { value: "ET", label: "Ethiopia" },
    { value: "FK", label: "Falkland Islands (Malvinas)" },
    { value: "FO", label: "Faroe Islands" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GF", label: "French Guiana" },
    { value: "PF", label: "French Polynesia" },
    { value: "TF", label: "French Southern Territories" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GI", label: "Gibraltar" },
    { value: "GR", label: "Greece" },
    { value: "GL", label: "Greenland" },
    { value: "GD", label: "Grenada" },
    { value: "GP", label: "Guadeloupe" },
    { value: "GU", label: "Guam" },
    { value: "GT", label: "Guatemala" },
    { value: "GG", label: "Guernsey" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HM", label: "Heard Island and McDonald Islands" },
    { value: "VA", label: "Holy See" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IM", label: "Isle of Man" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JE", label: "Jersey" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KP", label: "North Korea" },
    { value: "KR", label: "South Korea" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MO", label: "Macao" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "YT", label: "Mayotte" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MS", label: "Montserrat" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NC", label: "New Caledonia" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NU", label: "Niue" },
    { value: "NF", label: "Norfolk Island" },
    { value: "MP", label: "Northern Mariana Islands" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PW", label: "Palau" },
    { value: "PS", label: "Palestine" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PN", label: "Pitcairn" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "PR", label: "Puerto Rico" },
    { value: "QA", label: "Qatar" },
    { value: "RE", label: "Réunion" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "BL", label: "Saint Barthélemy" },
    { value: "SH", label: "Saint Helena" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "MF", label: "Saint Martin" },
    { value: "PM", label: "Saint Pierre and Miquelon" },
    { value: "VC", label: "Saint Vincent and the Grenadines" },
    { value: "WS", label: "Samoa" },
    { value: "SM", label: "San Marino" },
    { value: "ST", label: "Sao Tome and Principe" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SX", label: "Sint Maarten" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "GS", label: "South Georgia and the South Sandwich Islands" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SJ", label: "Svalbard and Jan Mayen" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TK", label: "Tokelau" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TC", label: "Turks and Caicos Islands" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "UM", label: "United States Minor Outlying Islands" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "VG", label: "Virgin Islands, British" },
    { value: "VI", label: "Virgin Islands, U.S." },
    { value: "WF", label: "Wallis and Futuna" },
    { value: "EH", label: "Western Sahara" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  const productDetails = [
    { title: "Assurify Lifetime Deal * 1", price: "50.00" },
    { title: "Subtotal", price: "50.00" },
    { title: "Shipping", price: "Free Shipping" },
  ];

  return (
    <div className="w-full bg-[#0C0D0C] min-h-screen text-white relative overflow-x-hidden">
      {/* SPACER TO PREVENT CONTENT OVERLAP WITH NAVBAR */}
      <div className="w-full h-[80px]"></div>

      {/* MAIN SECTION */}
      <SectionTitle middleText={"Checkout"} />

      <div className="container mt-14 mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN CONTENT */}
        <div className="flex gap-[30px]">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] lg:w-[670px]">
              <div className="flex gap-[30px] w-full">
                {/* First Name */}
                <TextField label={"First Name"} id={"first-name"} required={true} />
                {/* First Name */}
                <TextField label={"Last Name"} id={"last-name"} required={true} />
              </div>
              {/* Country (select field) */}
              <SelectField label="Country" placeholder="Choose a country" id="country" options={countryList} />
              {/* Town / City */}
              <TextField label={"Town/City"} id={"city"} required={true} />
              {/* Address */}
              <TextField label={"Address"} id={"address"} required={true} />
              {/* Email Address */}
              <EmailField label={"Email Address"} id={"email-address"} required={true} />
              {/* Phone Number (number field) */}
              <TextField label={"Phone Number"} id={"phone-number"} required={true} />
              {/* Order Note (text area) */}
              <TextAreaField label={"Order Note (Optional)"} placeholder="Write something here" id={"order-note"} />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-[30px]">
            {/* Coupon Code */}
            <div className="w-full lg:w-[470px]">
              <div className="p-6 border-[1px] border-[#48bd421a] rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]">
                <label htmlFor={"Coupon Code"} className="text-base text-[#A6A6A6] font-light leading-6">
                  Have a coupon code?
                </label>
                <div className="flex gap-[12px] mt-[8px]">
                  <input
                    type="text"
                    id={"coupon-code"}
                    placeholder={"Coupon Code"}
                    className="w-full px-4 h-[48px] rounded-2xl border border-[#A6A6A6] opacity-[0.6] focus:outline-none"
                  />
                  <button className="flex justify-center align-middle  text-[#000000] bg-[#F7F7F7] disabled:bg-[#A6A6A6] rounded-[16px] py-[11px] px-[24px]">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Your Order */}
            <div className="w-full lg:w-[470px]">
              <div className="p-6 border-[1px] border-[#48bd421a] rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]">
                <h3 className="text-[#fff] text-[20px] font-semibold leading-[30px]">Your Order</h3>

                {/* Product Details */}
                <div className="flex flex-col gap-[16px] mt-[12px]">
                  <div className="flex justify-between items-center">
                    <p className="text-[#fff] text-[16px] font-medium leading-[24px]">Product</p>
                    <p className="text-[#fff] text-[16px] font-medium leading-[24px]">Subtotal</p>
                  </div>

                  {productDetails.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <p className="text-[#A6A6A6] text-[16px] leading-[24px]">{item.title}</p>
                      <p className="text-[#A6A6A6] text-[16px] leading-[24px]">{item.price}</p>
                    </div>
                  ))}

                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <p className="text-[#fff] text-[16px] font-medium leading-[24px]">Total</p>
                    <p className="text-[#fff] text-[16px] font-medium leading-[24px]">$50.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="w-full lg:w-[470px]">
              <div className="p-6 border-[1px] border-[#48bd421a] rounded-xl bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.03)] backdrop-blur-[37px]">
                <h3 className="text-[#fff] text-[20px] font-semibold leading-[30px]">Payment Method</h3>

                {/* Product Details */}
                <div className="flex flex-col gap-[16px] mt-[12px]">
                  <div className="flex gap-[6px] items-center">
                    <img src={stripeImg} style={{ width: "24px", height: "24px" }} alt="" />
                    <p className="text-[#fff] text-[16px] font-medium leading-[24px]">Stripe</p>
                  </div>

                  {/* Placeholder Button */}
                  <button className="btn-primary-green-full">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
