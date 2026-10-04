
const Add = () => {
    const cities = ["Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet", "Barishal", "Rangpur", "Mymensingh", "Gazipur", "Narayanganj", "Cumilla", "Bogura", "Cox's Bazar", "Jessore", "Dinajpur", "Kushtia", "Tangail", "Sirajganj", "Pabna", "Jamalpur", "Narsingdi", "Naogaon", "Gopalganj", "Faridpur", "Satkhira", "Brahmanbaria", "Noakhali", "Kishoreganj", "Manikganj", "Munshiganj", "Chandpur", "Lakshmipur", "Netrokona", "Sherpur", "Kurigram", "Gaibandha", "Lalmonirhat", "Nilphamari", "Thakurgaon", "Panchagarh", "Joypurhat", "Natore", "Chapai Nawabganj", "Meherpur", "Chuadanga", "Jhenaidah", "Magura", "Narail", "Bagerhat", "Jhalokati", "Pirojpur", "Barguna", "Patuakhali", "Bhola", "Shariatpur", "Madaripur", "Sunamganj", "Habiganj", "Moulvibazar", "Rangamati", "Khagrachhari", "Bandarban", "Savar", "Dhamrai", "Tongi", "Sreemangal", "Kuakata", "Mongla", "Saidpur", "Hili", "Chhatak", "Ishwardi", "Tarash", "Shahjadpur", "Ullapara", "Belkuchi", "Kazipur", "Chilmari", "Nageshwari", "Ulipur", "Palashbari", "Gobindaganj", "Sundarganj", "Sadullapur", "Hatibandha", "Patgram", "Domar", "Jaldhaka", "Kishoreganj Upazila", "Parbatipur", "Phulbari", "Birganj", "Hakimpur", "Ghoraghat", "Pirganj", "Badarganj", "Mithapukur", "Kaunia", "Naldanga", "Singra", "Gurudaspur", "Baraigram", "Bagatipara", "Akkelpur", "Kalai", "K खेतलाल", "Panchbibi", "Rohanpur", "Shibganj", "Niamatpur", "Manda", "Mahadebpur", "Patnitala", "Dhamoirhat", "Sapahar", "Atrai", "Raninagar", "Badalgachhi", "Bhanga", "Boalmari", "Alfadanga", "Nagarkanda", "Saltha", "Sadarpur", "Charbhadrasan", "Rajbari", "Goalundo", "Pangsha", "Baliakandi", "Kalukhali", "Shibchar", "Kalkini", "Rajoir", "Zanjira", "Naria", "Bhedarganj", "Damudya", "Gosairhat", "Kotalipara", "Tungipara", "Maksudpur", "Kashiani", "Singair", "Gheor", "Daulatpur", "Saturia", "Harirampur", "Shibalaya", "Srinagar", "Sirajdikhan", "Louhajang", "Tongibari", "Garia", "Narsingdi Sadar", "Madhabdi", "Ghorashal", "Monohardi", "Shibpur", "Raipura", "Mirzapur", "Gopalpur", "Madhupur", "Dhanbari", "Bhuapur", "Kalihati", "Ghatail", "Sakhipur", "Basail", "Delduar", "Nagarpur", "Muktagachha", "Bhaluka", "Gaffargaon", "Trishal", "Nandail", "Ishwarganj", "Haluaghat", "Dhobaura", "Phulpur", "Gouripur", "Melandaha", "Sarishabari", "Islampur", "Dewanganj", "Bakshiganj", "Madarganj", "Nakla", "Nalitabari", "Jhenaigati", "Sreebardi", "Mohanganj", "Madan", "Khaliajuri", "Purbadhala", "Durgapur", "Kendua", "Atpara", "Barhatta", "Kalmakanda", "Chhatak", "Jagannathpur", "Derai", "Sullah", "Tahirpur", "Jamalganj", "Dharmapasha", "Nabiganj", "Bahubal", "Madhabpur", "Chunarughat", "Lakhai", "Baniachong", "Ajmiriganj", "Kamalganj", "Kulaura", "Rajnagar", "Barlekha", "Juri", "Golapganj", "Beanibazar", "Zakiganj", "Kanaighat", "Fenchuganj", "Balaganj", "Biswanath", "Comilla Sadar Dakshin", "Laksam", "Chaudaddagram", "Nangalkot", "Barura", "Chandina", "Daudkandi", "Debidwar", "Muradnagar", "Homna", "Titas", "Meghna", "Burichang", "Brahmanpara", "Ashuganj", "Kasba", "Nabinagar", "Sarail", "Nasirnagar", "Bancharampur", "Akhaura", "Hajiganj", "Shahrasti", "Matlab North", "Matlab South", "Kachua", "Faridganj", "Haimchar", "Ramganj", "Raipur", "Ramgati", "Kamalnagar", "Begumganj", "Senbagh", "Chatkhil", "Sonaimuri", "Subarnachar", "Hatiya", "Companiganj", "Chhagalnaiya", "Parshuram", "Fulgazi", "Daganbhuiyan", "Sonavazi", "Sitakunda", "Mirsharai", "Patiya", "Hathazari", "Raozan", "Rangunia", "Boalkhali", "Anwara", "Chandananish", "Satkania", "Lohagara", "Banshkhali", "Sandwip", "Chakaria", "Teknaf", "Ukhia", "Ramu", "Pekua", "Kutubdia", "Maheshkhali", "Kaptai", "Kawkhali", "Baghaichhari", "Barkal", "Langadu", "Rajasthali", "Belaichhari", "Juraichhari", "Naniarchar", "Dighinala", "Panchhari", "Mahalchhari", "Matiranga", "Manikchhari", "Ramgarh", "Guimara", "Lama", "Alikadam", "Thanchi", "Ruma", "Rowangchhari", "Naikhongchhari", "Nalchity", "Rajapur", "Kathalia", "Mathbaria", "Bhandaria", "Swarupkathi", "Kawkhali Barishal", "Nazirpur", "Zianagar", "Amtali", "Patharghata", "Betagi", "Bamna", "Taltali", "Galachipa", "Kalapara", "Bauphal", "Dashmina", "Mirzaganj", "Dumki", "Rangabali", "Lalmohan", "Char Fasson", "Borhanuddin", "Daulatkhan", "Tajumuddin", "Manpura", "Gournadi", "Muladi", "Bakerganj", "Babuganj", "Wazirpur", "Banaripara", "Agailjhara", "Mehendiganj", "Paikgachha", "Chalna", "Phultala", "Rupsha", "Terokhada", "Dighalia", "Batiaghata", "Dacope", "Dumuria", "Kalaroa", "Shyamnagar", "Asasuni", "Debhata", "Tala", "Kaliganj Satkhira", "Morrelganj", "Mongla Port", "Sharankhola", "Rampal", "Fakirhat", "Kachua Bagerhat", "Chitalmari", "Mollahat", "Kotchandpur", "Maheshpur", "Shailkupa", "Harinakunda", "Kaliganj Jhenaidah", "Alamdanga", "Damurhuda", "Jibannagar", "Sreepur Magura", "Shalikha", "Mohammadpur Magura", "Lohagara Narail", "Kalia", "Gangni", "Mujibnagar"]


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto my-3 border rounded shadow p-4">
                    <h2 className="mb-3">Add Student</h2>
                    <form action="">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Student Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-check form-check-inline">
                                Gender :
                            </label>
                            <label htmlFor="male" className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="gender" value="male" id="male" /> Male
                            </label>
                            <label htmlFor="female" className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="gender" value="female" id="female" /> Female
                            </label>
                        </div>
                        <div className="mb-3">
                            <select name="" id="" className="form-control">
                                <option value="">--Select City--</option>
                                {cities.map((city, i) => (
                                    <option value={city} key={i} >{city}</option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-success">Add Student</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;