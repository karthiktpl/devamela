
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var currentRow;
        // Populate the database
        //
        function populateDB(tx) {
			tx.executeSql('DROP TABLE IF EXISTS EVENTS');			
            tx.executeSql('CREATE TABLE IF NOT EXISTS EVENTS (id INTEGER PRIMARY KEY AUTOINCREMENT, name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder)');
        }
        function insertDB(tx) {
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Flag mast hoisting","09 PM","02-03-2018","Cherpu Bhagavathy Temple","Cherpu Bhagavathy Temple","","","A","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Flag mast hoisting","05 PM","03-03-2018","Thiruvullakkavu Temple","Thiruvullakkavu Temple","","","B","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","09 PM","19-03-2018","Cherpu Bhagavathy Temple","Cherpu Bhagavathy Temple","","","C","A")');	
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","06 PM","21-03-2018","Kadalassery Pisharikkal Temple","Kadalassery Pisharikkal Temple","","","D","A")');		
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","09 PM","21-03-2018","Thottippal Bhagavathy Temple","Thottippal Bhagavathy Temple","","","D","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","09 PM","22-03-2018","Urakam  Ammathiruvadi Temple","Urakam  Ammathiruvadi Temple","","","E","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","02 PM","23-04-2018","Triprayar Sreerama Temple","Triprayar Sreerama Temple","","","F","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","02.30 PM","23-03-2018","Choorakkodu Bhagavathy Temple","Choorakkodu Bhagavathy Temple","","","F","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","07 PM","23-03-2018","Anthikkad Bhagavathy Temple","Anthikkad Bhagavathy Temple","","","F","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","07 PM","23-03-2018","Kodannur Sastha Temple","Kodannur Sastha Temple","","","F","D")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","07 PM","23-03-2018","Cherpu Bhagavathy Temple","Cherpu Bhagavathy Temple","","","F","E")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","09.30 PM","23-03-2018","Urakam Ammathiruvadi Temple","Urakam Ammathiruvadi Temple","","","F","F")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","08 AM","24-03-2018","Kalleli Sastha Temple","Kalleli Sastha Temple","","","G","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","09 PM","24-03-2018","Chathakkudam Sastha Temple","Chathakkudam Sastha Temple","","","G","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","12 AM","24-03-2018","Kattoor","Kattoor Pooram","","","G","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","02 AM","25-03-2018","Arattupuzha Sastha Temple","Arattupuzha Sastha Temple","","","H","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","03 AM","25-03-2018","Thaikkattussery Temple","Thaikkattussery Temple","","","H","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","09.30 AM","25-03-2018","Thaikkattussery Temple","Thaikkattussery Temple","","","H","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","07.30 PM","25-03-2018","Narukulangara Temple","Narukulangara Temple","","","H","D")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","09 PM","25-03-2018","Chakkamkulangara Temple","Chakkamkulangara Temple","","","H","E")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","","25-03-2018","Chakkamkulangara Temple","Chakkamkulangara Villakku","","","H","F")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","07 AM","26-03-2018","Chittichathakudam Temple","Chittichathakudam Temple","","","I","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","04 PM","26-03-2018","Peruvanam Temple","Peruvanam Temple","Kadalassery Pisharikkal","Peruvanam Pooram","I","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","06.30 PM","26-03-2018","Peruvanam Temple","Peruvanam Temple","Arattupuzha Sastha","Peruvanam Pooram","I","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","07 PM","26-03-2018","Peruvanam Temple","Peruvanam Temple","Chathakkudam Sastha","Peruvanam Pooram","I","D")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","11 PM","26-03-2018","Peruvanam Temple","Peruvanam Temple","Urakamammathiruvadi","Peruvanam Pooram","I","E")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","11.30 PM","26-03-2018","Peruvanam Temple Western Gate","Peruvanam Temple","Cherpu Bhagavathy","Peruvanam Pooram","I","F")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","12 AM","27-03-2018","Peruvanam Temple","Vilakkacharam","","Peruvanam Pooram","J","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","03 AM","27-03-2018","Peruvanam Temple Western Gate","Peruvanam Temple","Cherpu Bhagavathy","Peruvanam Pooram","J","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","04.30 AM","27-03-2018","Peruvanam Temple","Peruvanam Temple","Cherpu Bhagavathy","Peruvanam Pooram","J","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","06.30 PM","27-03-2018","Triprayar Sreerama Temple","Triprayar Sreerama Temple","","","J","D")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","07.30 PM","27-03-2018","Thaloor Temple","Thaloor Temple","","","J","E")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","09 PM","27-03-2018","Pidikkaparambu Temple","Pidikkaparambu Pooram","","","J","F")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","10.30 PM","27-03-2018","Cheloor Mana","Cheloor Pooram","Triprayar Sreerama","","J","G")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Elephant Race","09 AM","28-03-2018","Pidikkaparambu Temple","Pidikkaparambu Temple","","","K","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","02.30 PM","28-03-2018","Cheruvathoor Mana","Cheruvathoor Mana Pooram","","","K","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","07 PM","28-03-2018","Arattupuzha Temple","Tharakkal Pooram","Arattupuzha Sastha","Tharakkal Pooram","K","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","","28-03-2018","Arattupuzha Temple","Arattupuzha Temple","Thottippal Bhagavathy","Tharakkal Pooram","K","D")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","","28-03-2018","Arattupuzha Temple","Arattupuzha Temple","Urakamammathiruvadi","Tharakkal Pooram","K","E")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","07 AM","29-03-2018","Thottippal Bhagavathy Temple","Thottippal Bhagavathy Temple","","","L","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","","29-03-2018","Thottippal Bhagavathy Temple","Thottippal Bhagavathy Temple","","","L","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","06 PM","29-03-2018","Arattupuzha Temple","Arattupuzha Temple","Arattupuzha Sastha","Arattupuzha Pooram","L","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","11 PM","29-03-2018","Arattupuzha Temple","Arattupuzha Temple","Chathakkudam Sastha","Arattupuzha Pooram","L","D")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","11.30 PM","29-03-2018","Arattupuzha Temple","Arattupuzha Temple","Edakkunni Bhagavathy","Arattupuzha Pooram","L","E")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","11.30 PM","29-03-2018","Arattupuzha Temple","Arattupuzha Temple","Nettissery Sastha","Arattupuzha Pooram","L","F")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","12 AM","30-03-2018","Arattupuzha Temple","Arattupuzha Temple","Kodakara Poonilarkavu, Chalakkudi Pisharikkal, Kaduppassery Bhagavathy","Arattupuzha Pooram","M","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","12 AM","30-03-2018","Arattupuzha Temple","Arattupuzha Temple","Triprayar Sreerama","Arattupuzha Pooram","M","B")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","01 AM","30-03-2018","Arattupuzha Temple","Arattupuzha Temple","Anthikkad, Choorakkodu","Arattupuzha Pooram","M","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","02 AM","30-03-2018","Arattupuzha Temple","Arattupuzha Temple","Triprayar Sreerama","Arattupuzha Pooram","M","D")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","04 AM","30-03-2018","Arattupuzha Temple","Kootti Ezhunnallippu","","Arattupuzha Pooram","M","E")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("","08 AM","30-03-2018","Arattupuzha Temple","Arattu Procession","","Arattupuzha Pooram","M","F")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavaadyam","07 PM","30-03-2018","Edakkunni Temple","Edakkunni Temple","","","M","G")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavaadyam","09 PM","30-03-2018","Triprayar Sreerama Temple","Triprayar Sreerama Temple","","","M","H")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","09 PM","30-03-2018","Triprayar Sreerama Temple West Gate","Triprayar Sreerama Temple","","","M","I")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Paandi Melam","09.30 PM","30-03-2018","Choorakkodu Temple","Choorakkodu Temple","","","M","J")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","01 AM","31-03-2018","Edakkunni Temple","Edakkunni Temple","","","M","K")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","08 AM","31-03-2018","Medamkulangara Temple","Medamkulangara Temple","","","N","A")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","08.30 AM","31-03-2018","Kodannur Sastha Temple","Kodannur Sastha Temple","","","N","B")');		
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","01 PM","31-03-2018","Peruvanam Temple","Peruvanam Temple","","","N","C")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","03 PM","31-03-2018","Namkulam Temple","Namkulam Temple","","","N","D")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","03 PM","31-03-2018","Chalakkudy Pisharikkal Temple","Chalakkudy Pisharikkal Temple","","","N","E")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","03 PM","31-03-2018","Nettissery Temple","Nettissery Temple","","","N","F")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavaadyam","03.30 PM","31-03-2018","Medamkulangara Temple","Medamkulangara Temple","","","N","G")');		
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchaari Melam","07 PM","31-03-2018","Chittichathakkudam Temple","Chittichathakkudam Temple","","","N","H")');
		tx.executeSql('INSERT INTO events (name,time,date,venue,temple,pareticipents,pooram,dateorder,timeorder) VALUES  ("Panchavadyam","07.30 PM","31-03-2018","Cherpu Bhagavathy Temple","Cherpu Bhagavathy Temple","","","N","I")');

		
        }

        // Query the database
        //
        function queryDB(tx) {
            tx.executeSql('SELECT * FROM EVENTS', [], querySuccess, errorCB);
        }

        function searchDateQueryDB(tx) {
			if(document.getElementById("datepicker").value!='')
			{
				var date=document.getElementById("datepicker").value.split('-');
				date=date[2]+'-'+date[1]+'-'+date[0];
				tx.executeSql("SELECT * FROM EVENTS where date='"+date+ "' GROUP BY id  ORDER BY dateorder,timeorder ASC",[], querySuccess, errorCB);
			}
			else
			{
				tx.executeSql("SELECT * FROM EVENTS GROUP BY id ORDER BY dateorder,timeorder ASC",[], querySuccess, errorCB);
			}
			
        }
        function searchTempleQueryDB(tx) {
			if(document.getElementById("templeselect").value!='')
			{
				tx.executeSql("SELECT * FROM EVENTS where temple='"+ document.getElementById("templeselect").value + "' GROUP BY id ORDER BY dateorder,timeorder ASC",[], querySuccess, errorCB);
			}
			else
			{
				tx.executeSql("SELECT * FROM EVENTS GROUP BY id ORDER BY dateorder,timeorder ASC",[], querySuccess, errorCB);
			}            
        }
        function searchEventQueryDB(tx) {
			if(document.getElementById("eventselect").value!='')
			{
				tx.executeSql("SELECT * FROM EVENTS where name='"+ document.getElementById("eventselect").value + "' OR pooram='"+ document.getElementById("eventselect").value + "' GROUP BY id ORDER BY dateorder,timeorder ASC",[], querySuccess, errorCB);
			}
			else
			{
				tx.executeSql("SELECT * FROM EVENTS GROUP BY id ORDER BY dateorder,timeorder ASC",[], querySuccess, errorCB);
			}            
        }		
        function searchPooramQueryDB(tx) {
			if(document.getElementById("pooramselect").value!='')
			{
				tx.executeSql("SELECT * FROM EVENTS where pooram='"+ document.getElementById("pooramselect").value + "' GROUP BY id  ORDER BY dateorder,timeorder ASC",[], querySuccess, errorCB);
			}
			else
			{
				tx.executeSql("SELECT * FROM EVENTS where pooram!='' GROUP BY id ORDER BY dateorder,timeorder ASC",[], querySuccess, errorCB);
			}  
            
        }
        // Query the success callback
        //
        function querySuccess(tx, results) {
            var tblText='';
            var len = results.rows.length;
			if(len==0)
			{
				tblText +='<li>';
				tblText +='<div class="info"><h2 class="title">No Results Found</h2><p class="desc">Please search dates between 23-02-2017 TO 23-03-2017</p>';					
				tblText +='</div></li>';				
			}
			else
			{
				for (var i = 0; i < len; i++) {
				var count=i+1;
				var splitdate=results.rows.item(i).date.split('-');				
				tblText +='<li><time datetime="2014-07-20"><span class="day">'+splitdate[0]+'</span><span class="month">'+GetMonth(splitdate[1])+'</span><span class="month">'+splitdate[2]+'</span><span class="time">'+ results.rows.item(i).time +'</span></time>';
				tblText +='<div class="info"><h2 class="title">'+ results.rows.item(i).name +'</h2><p class="desc">'+ results.rows.item(i).temple +'</p>';
					if(results.rows.item(i).temple!=results.rows.item(i).venue)
					{
							tblText +='<p class="desc">Venue : '+ results.rows.item(i).venue +'</p>';
					}						
					if(results.rows.item(i).pareticipents!='')
					{
							tblText +='<p class="desc">Participents : '+ results.rows.item(i).pareticipents +'</p>';
					}
					if(results.rows.item(i).pooram!='')
					{
							tblText +='<p class="desc">Pooram : '+ results.rows.item(i).pooram +'</p>';
					}
				tblText +='</div></li>';						
                //tblText +='<tr><td>'+count+'</td><td>'+ results.rows.item(i).date +'</td><td>'+ results.rows.item(i).time +'</td><td>'+ results.rows.item(i).temple +'</td><td>'+ results.rows.item(i).name +'</td></tr>';                
				}
			}				
            
            document.getElementById("itemlist").innerHTML =tblText;
        }
		function GetMonth(month)
		{
			if(month=='01')
			{
				return 'JAN';
			}
			else if(month=='02')
			{
				return 'FEB';
			}
			else if(month=='03')
			{
				return 'MAR';
			}
			else if(month=='04')
			{
				return 'APR';
			}
			else if(month=='05')
			{
				return 'MAY';
			}			
			else if(month=='06')
			{
				return 'JUN';
			}	
			else if(month=='07')
			{
				return 'JUL';
			}			
			else if(month=='08')
			{
				return 'AUG';
			}			
			else if(month=='09')
			{
				return 'SEP';
			}			
			else if(month=='10')
			{
				return 'OCT';
			}			
			else if(month=='11')
			{
				return 'NOV';
			}	
			else if(month=='12')
			{
				return 'DEC';
			}
		}
        // Transaction error callback
        //
        function errorCB(err) {
            alert("Error processing SQL: "+err.code);
        }

        // Transaction success callback
        //
        function successCB() {
            /*var db = window.openDatabase("Database", "1.0", "devamela", 200000);
            db.transaction(queryDB, errorCB);*/
        }

         // Cordova is ready
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "devamela", 200000);
            db.transaction(populateDB, errorCB, successCB);
			db.transaction(insertDB, errorCB, successCB);
        }

        //Insert query
        //

        function goDateSearch() {
            var db = window.openDatabase("Database", "1.0", "devamela", 200000);
            db.transaction(searchDateQueryDB, errorCB);
        }
        function goTempleSearch() {
            var db = window.openDatabase("Database", "1.0", "devamela", 200000);
            db.transaction(searchTempleQueryDB, errorCB);
        }
        function goEventSearch() {
            var db = window.openDatabase("Database", "1.0", "devamela", 200000);
            db.transaction(searchEventQueryDB, errorCB);
        }		
        function goPooramSearch() {
            var db = window.openDatabase("Database", "1.0", "devamela", 200000);
            db.transaction(searchPooramQueryDB, errorCB);
        }