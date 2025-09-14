export type Project = {
	id: string;
	title: string;
	description: string;
	images?: string[];
	videos?: string[];
};

export type Category = {
	id: string;
	name: string;
	projects: Project[];
};

export const categories: Category[] = [
	{
		id: "residence",
		name: "Residence",
		projects: [
			{
				id: "naisa",
				title: "NAISHA $ NAMISHA RESIDENCE,GURUGRAM",
				description: `
<article>
  <p>
    The Brief was to design a house for a large family of 7 people consisting
    of two couples and 3 children in their teens. Also an area for domestic
    help was required. The concept of the project evolved from a close analysis
    of the family setups of large Indian families in the urban context and thus
    striving for a perfect balance between private and public spaces and also
    the inter relation between the generations.
  </p>

  <p>
    Each member although part of a close-knit family, has their own space
    within the house and the bedrooms opening up to their semi open space
    creating a world within a world for each member.
  </p>

  <ul>
    <li><strong>Location Site:</strong> F-5, South City II, Gurugram</li>
    <li><strong>Area built up:</strong> (20 m × 42 m) — 1000 sqyrds</li>
    <li><strong>Area:</strong> 1680 sqm</li>
  </ul>

  <p><strong>Materials</strong> - The project was designed keeping in mind the prevalent construction practices and locally available materials. Composite</p>

  <p>
    R.C.C and brick construction has been used. The house is a display of intertwined
    indoor and outdoor spaces designed to filter in ample natural light and ventilation
    while ensuring a comfortable living environment. The exterior surfaces are a blend
    of kandla stone cladded walls in equitone pattern juxtaposed against steel, timber
    and glass.
  </p>
</article>
`,
				images: [
					"/images/naisa/naisa_main.png",
					"/images/naisa/img_1.png",
					"/images/naisa/img_2.png",
				],
			},
			{
				id: "sharma",
				title: "SHARMA RESIDENCE ",
				description: "",
				images: [
					"/images/sharma/img_main.png",
					"/images/sharma/img_1.png",
					"/images/sharma/img_2.png",
					"/images/sharma/img_3.png",
					"/images/sharma/img_4.png",
					"/images/sharma/img_5.png",
				],
			},
			{
				id: "kapoor",
				title: "KAPOOR Mansion,Chandigarh",
				description: "",
				images: [
					"/images/kapoor/img_main.png",
					"/images/kapoor/img_1.png",
					"/images/kapoor/img_2.png",
					"/images/kapoor/img_3.png",
					"/images/kapoor/img_4.png",
					"/images/kapoor/img_5.png",
					"/images/kapoor/img_6.png",
				],
			},
			{
				id: "garg",
				title: "GARG Residence",
				description: "",
				images: [
					"/images/garg/img_main.png",
					"/images/garg/img_1.png",
					"/images/garg/img_2.png",
					"/images/garg/img_3.png",
					"/images/garg/img_4.png",
					"/images/garg/img_5.png",
					"/images/garg/img_6.png",
					"/images/garg/img_7.png",
					"/images/garg/img_8.png",
					"/images/garg/img_9.png",
					"/images/garg/img_10.png",
					"/images/garg/img_11.png",
					"/images/garg/img_12.png",
				],
			},
		],
	},
	{
		id: "commercial",
		name: "Commercial",
		projects: [
			{
				id: "ratan_pearl",
				title: "RATAN PEARL MAIN FAÇADE DESIGN",
				description: "",
				images: [
					"/images/ratan/ratan_pearl.png",
					"/images/ratan/img_1.png",
					"/images/ratan/img_2.png",
				],
			},
			{
				id: "auditorium",
				title: "AUDITORIUM",
				description: `<article>
  <p>
    This auditorium stands as a testament to innovative design, offering a world-class venue that inspires creativity, engagement, and connection. The interiors are meticulously crafted with a focus on acoustics, ensuring superior sound quality and an immersive experience for every audience member. 
  </p>

  <ul>
    <li><strong>Location:</strong> Haryana</li>
    <li><strong>Carpet area:</strong> 10,700 sqft</li>
  </ul>
</article>`,
				images: [
					"/images/auditorium/img_main.png",
					"/images/auditorium/img_1.png",
					"/images/auditorium/img_2.png",
					"/images/auditorium/img_3.png",
					"/images/auditorium/img_4.png",
					"/images/auditorium/img_5.png",
					"/images/auditorium/img_6.png",
					"/images/auditorium/img_7.png",
					"/images/auditorium/img_8.png",
					"/images/auditorium/img_9.png",
					"/images/auditorium/img_10.png",
					"/images/auditorium/img_11.png",
					"/images/auditorium/img_12.png",
					"/images/auditorium/img_13.png",
					"/images/auditorium/img_14.png",
					"/images/auditorium/img_15.png",
					"/images/auditorium/img_16.png",
					"/images/auditorium/img_17.png",
				],
			},
			{
				id: "departmental",
				title: "Departmental Store",
				description: "",
				images: [
					"/images/departmental/img_main.png",
					"/images/departmental/img_1.png",
					"/images/departmental/img_2.png",
					"/images/departmental/img_3.png",
				],
			},
		],
	},
	{
		id: "officeInteriors",
		name: "Office Interiors",
		projects: [
			{
				id: "caOffice",
				title: "CA Office",
				description: "",
				images: ["/images/caOffice/img_main.png"],
			},
			{
				id: "workspaceCA",
				title: "Workspace for CA",
				description: `<article>
  <p>
    This CA office design integrates open workspaces with private cabins and meeting rooms,
    promoting collaboration and focus. A welcoming reception area sets the tone with sleek
    finishes and comfortable seating, reflecting the firm's professionalism. The interiors
    use a neutral color palette with strategic accents, creating an inviting and modern atmosphere.
    To enhance the client experience, the design incorporates dedicated spaces for meetings and discussions,
    furnished with ergonomic furniture and equipped with state-of-the-art technology. 
  </p>

  <p>
    Lighting plays a pivotal role, with a combination of natural light and energy-efficient fixtures,
    ensuring a bright and comfortable work environment. The project highlights efficient space utilization,
    blending aesthetics with practicality, creating a workspace that meets both the operational needs
    and the experiential aspirations of the client.
  </p>

  <ul>
    <li><strong>Location:</strong> Defense Colony, Delhi</li>
    <li><strong>Carpet area:</strong> 1500 sqft</li>
  </ul>

  <p><strong>Materials -</strong> High-quality materials such as laminated wood, glass partitions, and textured walls are used to balance sophistication with durability. Acoustic materials are integrated in meeting rooms and private cabins to ensure confidentiality during discussions.</p>

  <p><strong>Technology Integration –</strong> The office is equipped with smart technologies such as automated lighting, smart integrated system, and integrated AV systems in meeting rooms to enhance functionality and efficiency.</p>

  <p><strong>Storage Solutions –</strong> Integrated storage cabinets are designed within workstations and meeting rooms to maintain an organized and clutter-free environment, critical for a CA office handling sensitive documents</p>
</article>`,
				images: [
					"/images/workspaceCA/img_main.png",
					"/images/workspaceCA/img_1.png",
					"/images/workspaceCA/img_2.png",
					"/images/workspaceCA/img_3.png",
					"/images/workspaceCA/img_4.png",
					"/images/workspaceCA/img_5.png",
				],
			},
			{
				id: "workspace",
				title: "WORKSPACE",
				description: `<article>
  <p>
    Designed the state-of-the-art office for Balaji Switchgears in Moti Nagar, Delhi,
    this project showcases a seamless blend of conceptual innovation and functionality.
    The design features contemporary aesthetics, dynamic layouts, and premium materials,
    creating a workspace that inspires productivity and collaboration. Emphasis was placed
    on optimizing functionality while incorporating modern elements that align with the company’s
    values of precision, innovation, and technological expertise.
  </p>

  <ul>
    <li>Designed for comfort and productivity, the office includes adjustable workstations, collaborative zones, and private meeting spaces.</li>
    <li>Integrated smart lighting, automated temperature control, and energy-efficient solutions create a highly functional and sustainable workspace.</li>
    <li>High-quality materials such as glass partitions, wooden textures, and metallic accents enhance the overall sophistication of the interiors.</li>
    <li>The office features a sleek and contemporary design with clean lines and an open layout, reflecting a futuristic approach to workspace aesthetics.</li>
  </ul>

  <ul>
    <li><strong>Location:</strong> Moti Nagar, Delhi</li>
    <li><strong>Carpet area:</strong> 2500 sqft</li>
  </ul>
</article>`,
				images: [
					"/images/workspace/img_main.png",
					"/images/workspace/img_1.png",
					"/images/workspace/img_2.png",
					"/images/workspace/img_3.png",
					"/images/workspace/img_4.png",
					"/images/workspace/img_5.png",
					"/images/workspace/img_6.png",
					"/images/workspace/img_7.png",
				],
			},
			{
				id: "workspace_2",
				title: "Workspace",
				description: "",
				images: [
					"/images/workspace_2/img_main.png",
					"/images/workspace_2/img_1.png",
					"/images/workspace_2/img_2.png",
				],
			},
		],
	},
	{
		id: "recreational",
		name: "Recreational",
		projects: [
			{
				id: "ratanClubHouse",
				title: "Ratan Pear (Club House)",
				description: `<article>
  <p>
    The Ratan Pearl Club House is a thoughtfully designed recreational facility
    that offers a perfect blend of luxury and functionality. With amenities such
    as a yoga room, fully-equipped gym, kids' zone, billiards, board games, a club
    room, and a spacious community hall, it caters to the diverse needs of its members.
    The space is designed to foster wellness, entertainment, and community interaction,
    making it a vibrant hub for relaxation and social gatherings.
  </p>

  <p>
    The interior concept seamlessly blends sophistication with practicality,
    creating an inviting environment that inspires wellness, entertainment,
    and community bonding.
  </p>

  <ul>
    <li><strong>Location:</strong> Noida, NCR Delhi</li>
    <li><strong>Carpet area:</strong> 3400 sqft</li>
  </ul>

  <ul>
    <p>This thoughtfully designed space includes:</p>
    <li><strong>Yoga Room:</strong> A serene and tranquil space for mindfulness and wellness activities.</li>
    <li><strong>Fully-Equipped Gym:</strong> A modern fitness center with state-of-the-art equipment for health enthusiasts.</li>
    <li><strong>Kids’ Zone:</strong> A vibrant and safe play area for children to enjoy and engage in fun activities.</li>
    <li><strong>Billiards and Board Games:</strong> Entertainment zones for leisure and social interaction.</li>
    <li><strong>Club Room:</strong> A sophisticated space for members to relax, network, and unwind.</li>
    <li><strong>Community Hall:</strong> A versatile venue for hosting events, gatherings, and celebrations.</li>
  </ul>
</article>`,
				images: [
					"/images/ratanClubHouse/img_main.png",
					"/images/ratanClubHouse/img_1.png",
					"/images/ratanClubHouse/img_2.png",
					"/images/ratanClubHouse/img_3.png",
					"/images/ratanClubHouse/img_4.png",
					"/images/ratanClubHouse/img_5.png",
					"/images/ratanClubHouse/img_6.png",
					"/images/ratanClubHouse/img_7.png",
					"/images/ratanClubHouse/img_8.png",
					"/images/ratanClubHouse/img_9.png",
					"/images/ratanClubHouse/img_10.png",
				],
			},
			{
				id: "spiritualPilgrim",
				title: "Spiritual Pilgrim at Mehndipur",
				description: "",
				images: [
					"/images/spiritualPilgrim/img_main.png",
					"/images/spiritualPilgrim/img_1.png",
				],
			},
			{
				id: "bar",
				title: "Bar Interior",
				description: "",
				images: ["/images/bar/img_main.png"],
			},
		],
	},
	{
		id: "designManagement",
		name: "Design Management",
		projects: [
			{
				id: "mangifera",
				title: "THE MANGIFERA (FARMHOUSE)",
				description: `<article>
  <p>
    “A glass box framed by Prefabricated structure hosts a lounge at this pool house
    for a society in a Badshahpur.”
  </p>

  <p>
    The intention was to create a set of walls that form a simple pavilion around the
    swimming pool and a secluded courtyard to accentuate the connection between the
    pool house's interior, the pool itself and the landscaped garden. The length of
    the pool allows the experience of swimming in a garden, under a building and in a building.
  </p>

  <ul>
    <li><strong>Location:</strong> Badshahpur society, Gurugram</li>
    <li><strong>Total built up area:</strong> 9200 sqft (1022 sq yards)</li>
    <li><strong>Built up area:</strong> 2525 sqft</li>
  </ul>

  <p>
    A-frame house module cladded with wooden board inside and cemented sheets outside
    over steel frame structure would be stacked to provide flexible living spaces.
    A taller cubic volume clad in seasoned hardwood, is placed along the long axis of the linear pool.
    A 15’ tall window seems to bring in the court and the landscape green into this living room.
    Some characteristics of the farmhouse includes- Kitchenette with dining room,
    swimming pool, Lotus pond, Kitchen garden with a warm entrance promenade that enlighten the soul.
  </p>
</article>`,
				images: [
					"/images/mangifera/img_main.png",
					"/images/mangifera/img_1.png",
					"/images/mangifera/img_2.png",
				],
			},
			{
				id: "aggarwal",
				title: "AGGARWAL RESIDENCE,UDAIPUR",
				description: `<article>
  <p>
    The scope of the project is to design circumambient of the residence that incorporates
    indoor swimming pool, gym and spa with lush green spaces for social gathering.
    The site is split up into three major parts i.e.
  </p>

  <ul>
    <li><strong>Entrance court:</strong> Main Entrance plaza of the site that connects to parking, and way to bosquet and arrival court.</li>
    <li><strong>Hedged pathways:</strong> Anermy 5’-0” High with palm trees in between creates the vista with heart woeing sculptures</li>
    <li><strong>Arrival court:</strong> Courtyard between the Residential Building and swimming pool building.</li>
    <li><strong>Location:</strong> Fathehpur, Udaipur</li>
    <li><strong>Total built up area:</strong> 5353.30 sqm (6400sq yards)</li>
    <li><strong>Proposed Built up area:</strong> 745 sqm</li>
    <li><strong>Proposed Landscape area:</strong> 2630 sqm (3145 acres)</li>
  </ul>

  <p>
    <strong>Entrance court -</strong> It is the fusion of Japanese style and French style gardens
    framed with modern technology by using mild steel pipes that fitted around it.
    The elements includes natural stone and pebbles with Bamboo bushes and water features with large hedges
  </p>

  <p>
    With an inspiration from French Garden style, a <strong>Bosquet Garden</strong> (35mx35m)
    is designed in front of the Residential Building for 10 persons that is connected
    to main site entrance as well as the residential building through a vista of hedges.
  </p>

  <p>
    The swimming pool Building is the built up mass among the voids of recreational activities.
    It is composed of concrete column with metallic roof that incorporates a little pool bar
    with party lounge, Gym, spa and yoga space for relaxation.
  </p>
</article>`,
				images: [
					"/images/aggarwal/img_main.png",
					"/images/aggarwal/img_1.png",
					"/images/aggarwal/img_2.png",
				],
			},
		],
	},
	{
		id: "landscape",
		name: "Landscape",
		projects: [
			{
				id: "rooftop",
				title: "Roof Top Terrace Design",
				description: "",
				images: [
					"/images/mangifera/img_1.png",
					"/images/mangifera/img_2.png",
					"/images/mangifera/img_3.png",
					"/images/mangifera/img_4.png",
					"/images/mangifera/img_5.png",
				],
			},
			{
				id: "rooftopTerrace",
				title: "Roof Top Terrace Design 2",
				description: "",
				images: [
					"/images/rooftopTerrace/img_1.png",
					"/images/rooftopTerrace/img_2.png",
					"/images/rooftopTerrace/img_3.png",
					"/images/rooftopTerrace/img_4.png",
				],
			},
			{
				id: "terraceGarden",
				title: "TERRACE GARDEN",
				description: "",
				images: [
					"/images/terraceGarden/img_1.png",
					"/images/terraceGarden/img_2.png",
				],
			},
		],
	},
	{
		id: "interiors",
		name: "Interiors",
		projects: [
			{
				id: "botique",
				title: "BOTIQUE INTERIORS",
				description: "",
				images: [
					"/images/botique/img_1.png",
					"/images/botique/img_2.png",
					"/images/botique/img_3.png",
					"/images/botique/img_4.png",
					"/images/botique/img_5.png",
					"/images/botique/img_6.png",
					"/images/botique/img_7.png",
					"/images/botique/img_8.png",
				],
			},
			{
				id: "livingRoom",
				title: "Living Room Interior",
				description: "",
				images: [
					"/images/livingRoom/img_1.png",
					"/images/livingRoom/img_2.png",
					"/images/livingRoom/img_3.png",
					"/images/livingRoom/img_4.png",
				],
			},
			{
				id: "bedroom",
				title: "Bedroom Interior",
				description: "",
				images: [
					"/images/bedroom/img_1.png",
					"/images/bedroom/img_2.png",
					"/images/bedroom/img_3.png",
					"/images/bedroom/img_4.png",
					"/images/bedroom/img_5.png",
					"/images/bedroom/img_6.png",
				],
			},
			{
				id: "bathroom",
				title: "Bathroom Interior",
				description: "",
				images: [
					"/images/bathroom/img_1.png",
					"/images/bathroom/img_2.png",
					"/images/bathroom/img_3.png",
					"/images/bathroom/img_4.png",
					"/images/bathroom/img_5.png",
				],
			},
			{
				id: "kitchen",
				title: "Kitchen Interior",
				description: "",
				images: [
					"/images/kitchen/img_1.png",
					"/images/kitchen/img_2.png",
					"/images/kitchen/img_3.png",
					"/images/kitchen/img_4.png",
					"/images/kitchen/img_5.png",
					"/images/kitchen/img_6.png",
					"/images/kitchen/img_7.png",
				],
			},
			{
				id: "kids",
				title: "KIDS Corner",
				description: "",
				images: ["/images/kids/img_1.png", "/images/kids/img_2.png"],
			},
		],
	},
	{
		id: "sites",
		name: "Site Work",
		projects: [
			{
				id: "siteWork",
				title: "Site Work",
				description: "",
				images: [
					"/images/siteWork/img_1.png",
					"/images/siteWork/img_2.png",
					"/images/siteWork/img_3.png",
					"/images/siteWork/img_4.png",
					"/images/siteWork/img_5.png",
					"/images/siteWork/img_6.png",
					"/images/siteWork/img_7.png",
					"/images/siteWork/img_8.png",
					"/images/siteWork/img_9.png",
					"/images/siteWork/img_10.png",
					"/images/siteWork/img_11.png",
					"/images/siteWork/img_12.png",
					"/images/siteWork/img_13.png",
					"/images/siteWork/img_14.png",
					"/images/siteWork/img_15.png",
					"/images/siteWork/img_16.png",
					"/images/siteWork/img_17.png",
					"/images/siteWork/img_18.png",
					"/images/siteWork/img_19.png",
				],
			},
		],
	},
	{
		id: "execution",
		name: "Execution",
		projects: [
			{
				id: "execution",
				title: "Execution",
				description: "",
				videos: [
					"/videos/vid_2.mp4",
					"/videos/vid_1.mp4",
					"/videos/vid_3.mp4",
				],
			},
		],
	},
];
