import { Category, db, Product } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Product).values([
		{
			"codigo": "MI301",
			"producto": "Adaptador Audio Optico 90° Grados",
			"stock": 1,
			"precio_venta": 20,
			"categoria": "Adaptadores",
			"subcategoria": "Audio",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-audio-optico-90-grados",
			"id": 0
		},
		{
			"codigo": "MI001",
			"producto": "Adaptador Audio Optico Mini jack Toslink",
			"stock": 27,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Audio",
			"src_image": "/images/products/7.jpg",
			"slug": "adaptador-audio-optico-mini-jack-toslink",
			"id": 1
		},
		{
			"codigo": "MI002",
			"producto": "Adaptador Aviation M12 4 pines / AUDIO CONECTOR",
			"stock": 20,
			"precio_venta": 40,
			"categoria": "Adaptadores",
			"subcategoria": "Audio",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-aviation-m12-4-pines-audio-conector",
			"id": 2
		},
		{
			"codigo": "MI003",
			"producto": "Adaptador Aviation M12 4 pines / AV - M12",
			"stock": 25,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/4.jpg",
			"slug": "adaptador-aviation-m12-4-pines-av-m12",
			"id": 3
		},
		{
			"codigo": "MI004",
			"producto": "Adaptador Aviation M12 4 pines / M12 - AV",
			"stock": 28,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/3.jpg",
			"slug": "adaptador-aviation-m12-4-pines-m12-av",
			"id": 4
		},
		{
			"codigo": "MI341",
			"producto": "Adaptador Aviation M12 4 pines / M12 - AV MACHO",
			"stock": 25,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-aviation-m12-4-pines-m12-av-macho",
			"id": 5
		},
		{
			"codigo": "MI228",
			"producto": "Adaptador BNC a Coaxial F",
			"stock": 30,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-bnc-a-coaxial-f",
			"id": 6
		},
		{
			"codigo": "MI006",
			"producto": "Adaptador BNC a RCA Hembra",
			"stock": 61,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/2.jpg",
			"slug": "adaptador-bnc-a-rca-hembra",
			"id": 7
		},
		{
			"codigo": "MI225",
			"producto": "Adaptador BNC a RCA Macho",
			"stock": 19,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/4.jpg",
			"slug": "adaptador-bnc-a-rca-macho",
			"id": 8
		},
		{
			"codigo": "MI229",
			"producto": "Adaptador BNC a RG59",
			"stock": 24,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-bnc-a-rg59",
			"id": 9
		},
		{
			"codigo": "MI268",
			"producto": "Adaptador BNC Compresion RG59 Coaxial Lote x 2 Unidades",
			"stock": 14,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/8.jpg",
			"slug": "adaptador-bnc-compresion-rg59-coaxial-lote-x-2-unidades",
			"id": 10
		},
		{
			"codigo": "MI284",
			"producto": "Adaptador BNC Hembra a Plug Banana x 2 unidades",
			"stock": 5,
			"precio_venta": 30,
			"categoria": "Adaptadores",
			"src_image": "/images/products/4.jpg",
			"slug": "adaptador-bnc-hembra-a-plug-banana-x-2-unidades",
			"id": 11
		},
		{
			"codigo": "MI285",
			"producto": "Adaptador BNC Jack Hembra Macho Balun ",
			"stock": 16,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/10.jpg",
			"slug": "adaptador-bnc-jack-hembra-macho-balun",
			"id": 12
		},
		{
			"codigo": "MI231",
			"producto": "Adaptador BNC Macho a Dual hembra BNC ",
			"stock": 47,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/9.jpg",
			"slug": "adaptador-bnc-macho-a-dual-hembra-bnc",
			"id": 13
		},
		{
			"codigo": "MI283",
			"producto": "Adaptador BNC Macho a Plug Banana x 2 unidades",
			"stock": 2,
			"precio_venta": 30,
			"categoria": "Adaptadores",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-bnc-macho-a-plug-banana-x-2-unidades",
			"id": 14
		},
		{
			"codigo": "MI230",
			"producto": "Adaptador BNC Macho a TNC Hembra",
			"stock": 6,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/4.jpg",
			"slug": "adaptador-bnc-macho-a-tnc-hembra",
			"id": 15
		},
		{
			"codigo": "MI227",
			"producto": "Adaptador BNC Union Hembra ",
			"stock": 44,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/4.jpg",
			"slug": "adaptador-bnc-union-hembra",
			"id": 16
		},
		{
			"codigo": "MI226",
			"producto": "Adaptador BNC Union Macho ",
			"stock": 22,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/2.jpg",
			"slug": "adaptador-bnc-union-macho",
			"id": 17
		},
		{
			"codigo": "MI008",
			"producto": "Adaptador Cámara Gopro Clip 360",
			"stock": 5,
			"precio_venta": 25,
			"categoria": "Adaptadores",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/3.jpg",
			"slug": "adaptador-cmara-gopro-clip-360",
			"id": 18
		},
		{
			"codigo": "MI007",
			"producto": "Adaptador Cámara Gopro Hero + perno ",
			"stock": 14,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/6.jpg",
			"slug": "adaptador-cmara-gopro-hero-perno",
			"id": 19
		},
		{
			"codigo": "MI009",
			"producto": "Adaptador Cámara Gopro Tripode Nivelador Soporte",
			"stock": 8,
			"precio_venta": 30,
			"categoria": "Adaptadores",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/9.jpg",
			"slug": "adaptador-cmara-gopro-tripode-nivelador-soporte",
			"id": 20
		},
		{
			"codigo": "MI211",
			"producto": "Adaptador Cámara Tornillo 1/4  - 3/8  Rosca Macho",
			"stock": 33,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/7.jpg",
			"slug": "adaptador-cmara-tornillo-14-38-rosca-macho",
			"id": 21
		},
		{
			"codigo": "MI012",
			"producto": "Adaptador Cámara Tripode  Tornillo 1/4 Zapata",
			"stock": 18,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-cmara-tripode-tornillo-14-zapata",
			"id": 22
		},
		{
			"codigo": "MI011",
			"producto": "Adaptador Cámara Tripode 1/4  - 3/8  Kit x 3 Unidades",
			"stock": 13,
			"precio_venta": 20,
			"categoria": "Adaptadores",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-cmara-tripode-14-38-kit-x-3-unidades",
			"id": 23
		},
		{
			"codigo": "MI013",
			"producto": "Adaptador Cámara Tripode Flash 1/4  - 3/8 ",
			"stock": 7,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/2.jpg",
			"slug": "adaptador-cmara-tripode-flash-14-38",
			"id": 24
		},
		{
			"codigo": "MI262",
			"producto": "Adaptador Coaxial F Hembra a Coaxial 90 Grados Macho x 2",
			"stock": 13,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/3.jpg",
			"slug": "adaptador-coaxial-f-hembra-a-coaxial-90-grados-macho-x-2",
			"id": 25
		},
		{
			"codigo": "MI014",
			"producto": "Adaptador Corriente Universal Enchufe US",
			"stock": 18,
			"precio_venta": 5,
			"categoria": "Adaptadores",
			"src_image": "/images/products/8.jpg",
			"slug": "adaptador-corriente-universal-enchufe-us",
			"id": 26
		},
		{
			"codigo": "MI311",
			"producto": "Adaptador DC 12v Plug Hembra  x 5 unidades",
			"stock": 19,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-dc-12v-plug-hembra-x-5-unidades",
			"id": 27
		},
		{
			"codigo": "MI016",
			"producto": "Adaptador DVI a HDMI 24+1",
			"stock": 35,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/4.jpg",
			"slug": "adaptador-dvi-a-hdmi-241",
			"id": 28
		},
		{
			"codigo": "MI017",
			"producto": "Adaptador DVI a HDMI 24+5",
			"stock": 19,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-dvi-a-hdmi-245",
			"id": 29
		},
		{
			"codigo": "MI019",
			"producto": "Adaptador DVI a VGA 24+5",
			"stock": 33,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/10.jpg",
			"slug": "adaptador-dvi-a-vga-245",
			"id": 30
		},
		{
			"codigo": "MI020",
			"producto": "Adaptador HDMI - 90ª ",
			"stock": 31,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/10.jpg",
			"slug": "adaptador-hdmi-90",
			"id": 31
		},
		{
			"codigo": "MI021",
			"producto": "Adaptador HDMI - Micro",
			"stock": 43,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/7.jpg",
			"slug": "adaptador-hdmi-micro",
			"id": 32
		},
		{
			"codigo": "MI022",
			"producto": "Adaptador HDMI - Mini ",
			"stock": 25,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-hdmi-mini",
			"id": 33
		},
		{
			"codigo": "MI023",
			"producto": "Adaptador HDMI - Union",
			"stock": 27,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Video",
			"src_image": "/images/products/8.jpg",
			"slug": "adaptador-hdmi-union",
			"id": 34
		},
		{
			"codigo": "MI024",
			"producto": "Adaptador IEC a Coaxial F",
			"stock": 17,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-iec-a-coaxial-f",
			"id": 35
		},
		{
			"codigo": "MI261",
			"producto": "Adaptador IEC a Coaxial F - 90 Grados",
			"stock": 18,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Otros",
			"src_image": "/images/products/9.jpg",
			"slug": "adaptador-iec-a-coaxial-f-90-grados",
			"id": 36
		},
		{
			"codigo": "MI025",
			"producto": "Adaptador IEC-3,5 mm",
			"stock": 18,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-iec-35-mm",
			"id": 37
		},
		{
			"codigo": "MI224",
			"producto": "ADAPTADOR MICRO SD A USB X 2 UNIDADES",
			"stock": 30,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "adaptador-micro-sd-a-usb-x-2-unidades",
			"id": 38
		},
		{
			"codigo": "MI196",
			"producto": "Adaptador Micrófono Audífono 3.5m PC",
			"stock": 62,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Audio",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-micrfono-audfono-35m-pc",
			"id": 39
		},
		{
			"codigo": "MI195",
			"producto": "Adaptador Micrófono Audífono 3.5m Smartphone",
			"stock": 77,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"subcategoria": "Audio",
			"src_image": "/images/products/6.jpg",
			"slug": "adaptador-micrfono-audfono-35m-smartphone",
			"id": 40
		},
		{
			"codigo": "MI029",
			"producto": "Adaptador OTG USB Robot",
			"stock": 31,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"subcategoria": "Otros",
			"src_image": "/images/products/3.jpg",
			"slug": "adaptador-otg-usb-robot",
			"id": 41
		},
		{
			"codigo": "MI030",
			"producto": "Adaptador RCA a Coaxial F",
			"stock": 11,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/10.jpg",
			"slug": "adaptador-rca-a-coaxial-f",
			"id": 42
		},
		{
			"codigo": "MI250",
			"producto": "Adaptador RCA Macho a Coaxial F Hembra",
			"stock": 29,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-rca-macho-a-coaxial-f-hembra",
			"id": 43
		},
		{
			"codigo": "MI031",
			"producto": "Adaptador RPSMA Macho \"\"T\"\" a 2 SMA Hembra",
			"stock": 23,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/6.jpg",
			"slug": "adaptador-rpsma-macho-t-a-2-sma-hembra",
			"id": 44
		},
		{
			"codigo": "MI032",
			"producto": "Adaptador RPSMA Macho a SMA Hembra",
			"stock": 12,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/10.jpg",
			"slug": "adaptador-rpsma-macho-a-sma-hembra",
			"id": 45
		},
		{
			"codigo": "MI033",
			"producto": "Adaptador RPSMA TS9 HEMBRA",
			"stock": 8,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/9.jpg",
			"slug": "adaptador-rpsma-ts9-hembra",
			"id": 46
		},
		{
			"codigo": "MI210",
			"producto": "Adaptador RS485 TTL MAX485 (Modulo)",
			"stock": 57,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-rs485-ttl-max485-modulo",
			"id": 47
		},
		{
			"codigo": "MI034",
			"producto": "Adaptador SMA a Coaxial F",
			"stock": 74,
			"precio_venta": 13,
			"categoria": "Adaptadores",
			"src_image": "/images/products/10.jpg",
			"slug": "adaptador-sma-a-coaxial-f",
			"id": 48
		},
		{
			"codigo": "MI035",
			"producto": "Adaptador SMA Macho a RPSMA Hembra 90°",
			"stock": 21,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-sma-macho-a-rpsma-hembra-90",
			"id": 49
		},
		{
			"codigo": "MI036",
			"producto": "Adaptador SMA TS9 HEMBRA",
			"stock": 5,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/2.jpg",
			"slug": "adaptador-sma-ts9-hembra",
			"id": 50
		},
		{
			"codigo": "MI038",
			"producto": "Adaptador USB a RS485 (Modulo)",
			"stock": 51,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/2.jpg",
			"slug": "adaptador-usb-a-rs485-modulo",
			"id": 51
		},
		{
			"codigo": "MI039",
			"producto": "Adaptador USB a RS485 (Modulo) FT232",
			"stock": 13,
			"precio_venta": 25,
			"categoria": "Adaptadores",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-usb-a-rs485-modulo-ft232",
			"id": 52
		},
		{
			"codigo": "MI040",
			"producto": "Adaptador USB Tipo C  Audifonos",
			"stock": 35,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/9.jpg",
			"slug": "adaptador-usb-tipo-c-audifonos",
			"id": 53
		},
		{
			"codigo": "MI251",
			"producto": "Adaptador USB Tipo C  Audifonos SAMSUNG",
			"stock": 9,
			"precio_venta": 25,
			"categoria": "Adaptadores",
			"src_image": "/images/products/6.jpg",
			"slug": "adaptador-usb-tipo-c-audifonos-samsung",
			"id": 54
		},
		{
			"codigo": "MI041",
			"producto": "Adaptador USB Tipo C  Carga / Audifonos ",
			"stock": 3,
			"precio_venta": 15,
			"categoria": "Adaptadores",
			"src_image": "/images/products/7.jpg",
			"slug": "adaptador-usb-tipo-c-carga-audifonos",
			"id": 55
		},
		{
			"codigo": "MI160",
			"producto": "Adaptador USB Tipo C  Micro SD",
			"stock": 10,
			"precio_venta": 25,
			"categoria": "Adaptadores",
			"src_image": "/images/products/1.jpg",
			"slug": "adaptador-usb-tipo-c-micro-sd",
			"id": 56
		},
		{
			"codigo": "MI042",
			"producto": "Adaptador USB Tipo C  Micro USB",
			"stock": 6,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/8.jpg",
			"slug": "adaptador-usb-tipo-c-micro-usb",
			"id": 57
		},
		{
			"codigo": "MI043",
			"producto": "Adaptador USB Tipo C -USB 3,0",
			"stock": 12,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/10.jpg",
			"slug": "adaptador-usb-tipo-c-usb-30",
			"id": 58
		},
		{
			"codigo": "MI296",
			"producto": "Aerografo + Compresor Dual Action AirBrush",
			"stock": 5,
			"precio_venta": 420,
			"categoria": "Otros",
			"src_image": "/images/products/3.jpg",
			"slug": "aerografo-compresor-dual-action-airbrush",
			"id": 59
		},
		{
			"codigo": "MI297",
			"producto": "Aerografo Kit AirBrush Dual Action",
			"stock": 6,
			"precio_venta": 195,
			"categoria": "Otros",
			"src_image": "/images/products/2.jpg",
			"slug": "aerografo-kit-airbrush-dual-action",
			"id": 60
		},
		{
			"codigo": "MI260",
			"producto": "Anillo Led Ws2812 Rgb 12 Bit Para Raspberry Placa Desarrollo",
			"stock": 18,
			"precio_venta": 25,
			"categoria": "Otros",
			"src_image": "/images/products/6.jpg",
			"slug": "anillo-led-ws2812-rgb-12-bit-para-raspberry-placa-desarrollo",
			"id": 61
		},
		{
			"codigo": "MI291",
			"producto": "Anillo Led Ws2812 Rgb 16 Bit Para Raspberry DIY",
			"stock": 9,
			"precio_venta": 30,
			"categoria": "Otros",
			"src_image": "/images/products/9.jpg",
			"slug": "anillo-led-ws2812-rgb-16-bit-para-raspberry-diy",
			"id": 62
		},
		{
			"codigo": "MI364",
			"producto": "Antena 4G Lte SMA Macho",
			"stock": 10,
			"precio_venta": 45,
			"categoria": "Antenas",
			"src_image": "/images/products/1.jpg",
			"slug": "antena-4g-lte-sma-macho",
			"id": 63
		},
		{
			"codigo": "MI363",
			"producto": "Antena GPS Imantada SMA Macho",
			"stock": 10,
			"precio_venta": 40,
			"categoria": "Antenas",
			"subcategoria": "Móvil",
			"src_image": "/images/products/6.jpg",
			"slug": "antena-gps-imantada-sma-macho",
			"id": 64
		},
		{
			"codigo": "MI299",
			"producto": "Antena TP-Link CPE610 23dbi 300mbps",
			"stock": 5,
			"precio_venta": 260,
			"categoria": "Antenas",
			"subcategoria": "GPS",
			"src_image": "/images/products/9.jpg",
			"slug": "antena-tp-link-cpe610-23dbi-300mbps",
			"id": 65
		},
		{
			"codigo": "MI235",
			"producto": "Antena TS9",
			"stock": 17,
			"precio_venta": 20,
			"categoria": "Antenas",
			"src_image": "/images/products/5.jpg",
			"slug": "antena-ts9",
			"id": 66
		},
		{
			"codigo": "MI046",
			"producto": "Antena TV Digital Delgado Plana",
			"stock": 12,
			"precio_venta": 80,
			"categoria": "Antenas",
			"subcategoria": "TV",
			"src_image": "/images/products/9.jpg",
			"slug": "antena-tv-digital-delgado-plana",
			"id": 67
		},
		{
			"codigo": "MI047",
			"producto": "Antena Tv IEC 3.M",
			"stock": 6,
			"precio_venta": 45,
			"categoria": "Antenas",
			"subcategoria": "TV",
			"src_image": "/images/products/10.jpg",
			"slug": "antena-tv-iec-3m",
			"id": 68
		},
		{
			"codigo": "MI048",
			"producto": "Antena Tv MCX 3.M",
			"stock": 13,
			"precio_venta": 45,
			"categoria": "Antenas",
			"src_image": "/images/products/6.jpg",
			"slug": "antena-tv-mcx-3m",
			"id": 69
		},
		{
			"codigo": "MI049",
			"producto": "Antena Tv SMA 3.M",
			"stock": 35,
			"precio_venta": 45,
			"categoria": "Antenas",
			"src_image": "/images/products/9.jpg",
			"slug": "antena-tv-sma-3m",
			"id": 70
		},
		{
			"codigo": "MI233",
			"producto": "Antena WIFI 7dbi RP-SMA",
			"stock": 7,
			"precio_venta": 35,
			"categoria": "Antenas",
			"subcategoria": "Wifi",
			"src_image": "/images/products/9.jpg",
			"slug": "antena-wifi-7dbi-rp-sma",
			"id": 71
		},
		{
			"codigo": "MI234",
			"producto": "Antena WIFI 7dbi SMA",
			"stock": 6,
			"precio_venta": 35,
			"categoria": "Antenas",
			"subcategoria": "Wifi",
			"src_image": "/images/products/8.jpg",
			"slug": "antena-wifi-7dbi-sma",
			"id": 72
		},
		{
			"codigo": "MI245",
			"producto": "Antena Wifi CRS9 3dbi",
			"stock": 21,
			"precio_venta": 20,
			"categoria": "Antenas",
			"subcategoria": "Wifi",
			"src_image": "/images/products/5.jpg",
			"slug": "antena-wifi-crs9-3dbi",
			"id": 73
		},
		{
			"codigo": "MI246",
			"producto": "Antena Wifi SMA Macho 3dbi",
			"stock": 11,
			"precio_venta": 20,
			"categoria": "Antenas",
			"subcategoria": "Wifi",
			"src_image": "/images/products/6.jpg",
			"slug": "antena-wifi-sma-macho-3dbi",
			"id": 74
		},
		{
			"codigo": "MI257",
			"producto": "Audifonos Inalambricos Bluetooth TWS X3",
			"stock": 56,
			"precio_venta": 75,
			"categoria": "Otros",
			"src_image": "/images/products/9.jpg",
			"slug": "audifonos-inalambricos-bluetooth-tws-x3",
			"id": 75
		},
		{
			"codigo": "MI045",
			"producto": "Balanza de Mano Digital 50 Kg",
			"stock": 2,
			"precio_venta": 60,
			"categoria": "Balanzas",
			"src_image": "/images/products/6.jpg",
			"slug": "balanza-de-mano-digital-50-kg",
			"id": 76
		},
		{
			"codigo": "MI050",
			"producto": "Balanza Gramera Bolsillo 200/500 gr.",
			"stock": 8,
			"precio_venta": 45,
			"categoria": "Balanzas",
			"src_image": "/images/products/3.jpg",
			"slug": "balanza-gramera-bolsillo-200500-gr",
			"id": 77
		},
		{
			"codigo": "MI344",
			"producto": "Bateria Renata 394 (Pack x 2 unidades)",
			"stock": 9,
			"precio_venta": 30,
			"categoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "bateria-renata-394-pack-x-2-unidades",
			"id": 78
		},
		{
			"codigo": "MI348",
			"producto": "BOLSA AL VACIO PACK x 10 UNIDADES",
			"stock": 10,
			"precio_venta": 30,
			"categoria": "Otros",
			"src_image": "/images/products/2.jpg",
			"slug": "bolsa-al-vacio-pack-x-10-unidades",
			"id": 79
		},
		{
			"codigo": "MI279",
			"producto": "Boton Panico Pulsador OPALUX 10A ",
			"stock": 4,
			"precio_venta": 30,
			"categoria": "Otros",
			"src_image": "/images/products/4.jpg",
			"slug": "boton-panico-pulsador-opalux-10a",
			"id": 80
		},
		{
			"codigo": "MI319",
			"producto": "Brazo Curvo para Camara 50cm",
			"stock": 1,
			"precio_venta": 65,
			"categoria": "Accesorios",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/5.jpg",
			"slug": "brazo-curvo-para-camara-50cm",
			"id": 81
		},
		{
			"codigo": "MI340",
			"producto": "Brazo Curvo para Camara 75cm",
			"stock": 2,
			"precio_venta": 90,
			"categoria": "Accesorios",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/4.jpg",
			"slug": "brazo-curvo-para-camara-75cm",
			"id": 82
		},
		{
			"codigo": "MI316",
			"producto": "Brazo Recto para Camara 30cm",
			"stock": 3,
			"precio_venta": 50,
			"categoria": "Accesorios",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/9.jpg",
			"slug": "brazo-recto-para-camara-30cm",
			"id": 83
		},
		{
			"codigo": "MI317",
			"producto": "Brazo Recto para Camara 50cm",
			"stock": 3,
			"precio_venta": 65,
			"categoria": "Accesorios",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/10.jpg",
			"slug": "brazo-recto-para-camara-50cm",
			"id": 84
		},
		{
			"codigo": "MI318",
			"producto": "Brazo Recto para Camara 75cm",
			"stock": 3,
			"precio_venta": 90,
			"categoria": "Accesorios",
			"subcategoria": "Cámaras",
			"src_image": "/images/products/10.jpg",
			"slug": "brazo-recto-para-camara-75cm",
			"id": 85
		},
		{
			"codigo": "MI267",
			"producto": "Buzzer 3v-24v Zumbador Continuo",
			"stock": 20,
			"precio_venta": 10,
			"categoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "buzzer-3v-24v-zumbador-continuo",
			"id": 86
		},
		{
			"codigo": "MI060",
			"producto": "Cable Audio RCA Jack 3.5mm hembra",
			"stock": 15,
			"precio_venta": 15,
			"categoria": "Cables",
			"src_image": "/images/products/9.jpg",
			"slug": "cable-audio-rca-jack-35mm-hembra",
			"id": 87
		},
		{
			"codigo": "MI061",
			"producto": "Cable Audio RCA Jack 3.5mm Macho",
			"stock": 27,
			"precio_venta": 15,
			"categoria": "Cables",
			"src_image": "/images/products/1.jpg",
			"slug": "cable-audio-rca-jack-35mm-macho",
			"id": 88
		},
		{
			"codigo": "MI056",
			"producto": "Cable Aviator M12 4pin 10M",
			"stock": 61,
			"precio_venta": 60,
			"categoria": "Cables",
			"src_image": "/images/products/10.jpg",
			"slug": "cable-aviator-m12-4pin-10m",
			"id": 89
		},
		{
			"codigo": "MI057",
			"producto": "Cable Aviator M12 4pin 20M",
			"stock": 59,
			"precio_venta": 95,
			"categoria": "Cables",
			"src_image": "/images/products/3.jpg",
			"slug": "cable-aviator-m12-4pin-20m",
			"id": 90
		},
		{
			"codigo": "MI205",
			"producto": "Cable Aviator M12 4pin 3M",
			"stock": 61,
			"precio_venta": 25,
			"categoria": "Cables",
			"src_image": "/images/products/10.jpg",
			"slug": "cable-aviator-m12-4pin-3m",
			"id": 91
		},
		{
			"codigo": "MI059",
			"producto": "Cable Aviator M12 4pin 5M",
			"stock": 45,
			"precio_venta": 35,
			"categoria": "Cables",
			"src_image": "/images/products/1.jpg",
			"slug": "cable-aviator-m12-4pin-5m",
			"id": 92
		},
		{
			"codigo": "MI062",
			"producto": "Cable HDMI 1 M",
			"stock": 2,
			"precio_venta": 15,
			"categoria": "Cables",
			"subcategoria": "Video",
			"src_image": "/images/products/8.jpg",
			"slug": "cable-hdmi-1-m",
			"id": 93
		},
		{
			"codigo": "MI063",
			"producto": "Cable HDMI 5 metros",
			"stock": 6,
			"precio_venta": 50,
			"categoria": "Cables",
			"subcategoria": "Video",
			"src_image": "/images/products/2.jpg",
			"slug": "cable-hdmi-5-metros",
			"id": 94
		},
		{
			"codigo": "MI066",
			"producto": "Cable Mini jack 2,5 mm AV VIDEO",
			"stock": 21,
			"precio_venta": 15,
			"categoria": "Cables",
			"subcategoria": "Video",
			"src_image": "/images/products/10.jpg",
			"slug": "cable-mini-jack-25-mm-av-video",
			"id": 95
		},
		{
			"codigo": "MI064",
			"producto": "Cable Mini jack 2.5mm  RCA",
			"stock": 15,
			"precio_venta": 15,
			"categoria": "Cables",
			"subcategoria": "Video",
			"src_image": "/images/products/2.jpg",
			"slug": "cable-mini-jack-25mm-rca",
			"id": 96
		},
		{
			"codigo": "MI065",
			"producto": "Cable Mini Jack 3.5mm RCA",
			"stock": 9,
			"precio_venta": 15,
			"categoria": "Cables",
			"subcategoria": "Video",
			"src_image": "/images/products/5.jpg",
			"slug": "cable-mini-jack-35mm-rca",
			"id": 97
		},
		{
			"codigo": "MI067",
			"producto": "Cable Optico  2 metros",
			"stock": 2,
			"precio_venta": 20,
			"categoria": "Cables",
			"subcategoria": "Audio",
			"src_image": "/images/products/7.jpg",
			"slug": "cable-optico-2-metros",
			"id": 98
		},
		{
			"codigo": "MI068",
			"producto": "Cable Optico  3 metros",
			"stock": 10,
			"precio_venta": 25,
			"categoria": "Cables",
			"subcategoria": "Audio",
			"src_image": "/images/products/7.jpg",
			"slug": "cable-optico-3-metros",
			"id": 99
		},
		{
			"codigo": "MI028",
			"producto": "Cable Pigtail MCX a Coaxial F Hembra",
			"stock": 6,
			"precio_venta": 20,
			"categoria": "Cables",
			"src_image": "/images/products/1.jpg",
			"slug": "cable-pigtail-mcx-a-coaxial-f-hembra",
			"id": 100
		},
		{
			"codigo": "MI197",
			"producto": "Cable Pigtail MHF4 RP-SMA",
			"stock": 40,
			"precio_venta": 20,
			"categoria": "Cables",
			"src_image": "/images/products/8.jpg",
			"slug": "cable-pigtail-mhf4-rp-sma",
			"id": 101
		},
		{
			"codigo": "MI198",
			"producto": "Cable Pigtail MHF4 SMA",
			"stock": 57,
			"precio_venta": 20,
			"categoria": "Cables",
			"src_image": "/images/products/6.jpg",
			"slug": "cable-pigtail-mhf4-sma",
			"id": 102
		},
		{
			"codigo": "MI069",
			"producto": "Cable Pigtail MMCX - RPSMA Hembra",
			"stock": 7,
			"precio_venta": 15,
			"categoria": "Cables",
			"src_image": "/images/products/2.jpg",
			"slug": "cable-pigtail-mmcx-rpsma-hembra",
			"id": 103
		},
		{
			"codigo": "MI070",
			"producto": "Cable Pigtail MMCX - SMA Hembra",
			"stock": 12,
			"precio_venta": 15,
			"categoria": "Cables",
			"src_image": "/images/products/4.jpg",
			"slug": "cable-pigtail-mmcx-sma-hembra",
			"id": 104
		},
		{
			"codigo": "MI071",
			"producto": "Cable Pigtail UFL RPSMA Hembra Drone",
			"stock": 53,
			"precio_venta": 15,
			"categoria": "Cables",
			"src_image": "/images/products/3.jpg",
			"slug": "cable-pigtail-ufl-rpsma-hembra-drone",
			"id": 105
		},
		{
			"codigo": "MI072",
			"producto": "Cable Pigtail UFL SMA Hembra",
			"stock": 65,
			"precio_venta": 15,
			"categoria": "Cables",
			"src_image": "/images/products/5.jpg",
			"slug": "cable-pigtail-ufl-sma-hembra",
			"id": 106
		},
		{
			"codigo": "MI073",
			"producto": "Cable POE Mellizo",
			"stock": 32,
			"precio_venta": 25,
			"categoria": "Cables",
			"src_image": "/images/products/3.jpg",
			"slug": "cable-poe-mellizo",
			"id": 107
		},
		{
			"codigo": "MI074",
			"producto": "Cable Usb 8 Pines Camaras",
			"stock": 20,
			"precio_venta": 25,
			"categoria": "Cables",
			"src_image": "/images/products/1.jpg",
			"slug": "cable-usb-8-pines-camaras",
			"id": 108
		},
		{
			"codigo": "MI075",
			"producto": "Cable Usb a Sata 2.0 Laptop Pc",
			"stock": 11,
			"precio_venta": 30,
			"categoria": "Cables",
			"src_image": "/images/products/9.jpg",
			"slug": "cable-usb-a-sata-20-laptop-pc",
			"id": 109
		},
		{
			"codigo": "MI015",
			"producto": "Cable USB PS2 a PS3",
			"stock": 1,
			"precio_venta": 25,
			"categoria": "Cables",
			"src_image": "/images/products/6.jpg",
			"slug": "cable-usb-ps2-a-ps3",
			"id": 110
		},
		{
			"codigo": "MI289",
			"producto": "Cable USB RS232 Serial DB9 9 Pin",
			"stock": 13,
			"precio_venta": 25,
			"categoria": "Cables",
			"src_image": "/images/products/6.jpg",
			"slug": "cable-usb-rs232-serial-db9-9-pin",
			"id": 111
		},
		{
			"codigo": "MI076",
			"producto": "Cable Video AV 15 metros",
			"stock": 36,
			"precio_venta": 45,
			"categoria": "Cables",
			"src_image": "/images/products/7.jpg",
			"slug": "cable-video-av-15-metros",
			"id": 112
		},
		{
			"codigo": "MI077",
			"producto": "Cable Video AV 20 metros",
			"stock": 42,
			"precio_venta": 55,
			"categoria": "Cables",
			"src_image": "/images/products/2.jpg",
			"slug": "cable-video-av-20-metros",
			"id": 113
		},
		{
			"codigo": "MI078",
			"producto": "Cable Video AV 6 metros",
			"stock": 100,
			"precio_venta": 20,
			"categoria": "Cables",
			"src_image": "/images/products/6.jpg",
			"slug": "cable-video-av-6-metros",
			"id": 114
		},
		{
			"codigo": "MI254",
			"producto": "Calibrador Digital Vernier IP54 Acero Inoxidable",
			"stock": 39,
			"precio_venta": 195,
			"categoria": "Calibrador",
			"src_image": "/images/products/2.jpg",
			"slug": "calibrador-digital-vernier-ip54-acero-inoxidable",
			"id": 115
		},
		{
			"codigo": "MI079",
			"producto": "Calibrador Digital Vernier Pie de rey",
			"stock": 85,
			"precio_venta": 50,
			"categoria": "Calibrador",
			"src_image": "/images/products/8.jpg",
			"slug": "calibrador-digital-vernier-pie-de-rey",
			"id": 116
		},
		{
			"codigo": "MI352",
			"producto": "CAMARA AHD ADAS 720P FRONTAL",
			"stock": 13,
			"precio_venta": 220,
			"categoria": "Camaras",
			"src_image": "/images/products/7.jpg",
			"slug": "camara-ahd-adas-720p-frontal",
			"id": 117
		},
		{
			"codigo": "MI351",
			"producto": "CAMARA AHD DSM 720P FATIGA",
			"stock": 13,
			"precio_venta": 230,
			"categoria": "Camaras",
			"src_image": "/images/products/9.jpg",
			"slug": "camara-ahd-dsm-720p-fatiga",
			"id": 118
		},
		{
			"codigo": "MI306",
			"producto": "CAMARA AHD EXTERIOR 1080P - LATERAL ESPEJO NTSC ",
			"stock": 10,
			"precio_venta": 170,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/10.jpg",
			"slug": "camara-ahd-exterior-1080p-lateral-espejo-ntsc",
			"id": 119
		},
		{
			"codigo": "MI305",
			"producto": "CAMARA AHD EXTERIOR 1080P - LATERAL NTSC",
			"stock": 34,
			"precio_venta": 170,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/1.jpg",
			"slug": "camara-ahd-exterior-1080p-lateral-ntsc",
			"id": 120
		},
		{
			"codigo": "MI307",
			"producto": "CAMARA AHD EXTERIOR 1080P - PANORAMICA NTSC",
			"stock": 3,
			"precio_venta": 170,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/9.jpg",
			"slug": "camara-ahd-exterior-1080p-panoramica-ntsc",
			"id": 121
		},
		{
			"codigo": "MI314",
			"producto": "CAMARA AHD EXTERIOR 1080P - REVERSA NTSC",
			"stock": 27,
			"precio_venta": 190,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/8.jpg",
			"slug": "camara-ahd-exterior-1080p-reversa-ntsc",
			"id": 122
		},
		{
			"codigo": "MI308",
			"producto": "CAMARA AHD EXTERIOR 1080P - STARLIGHT NTSC",
			"stock": 26,
			"precio_venta": 170,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/1.jpg",
			"slug": "camara-ahd-exterior-1080p-starlight-ntsc",
			"id": 123
		},
		{
			"codigo": "MI309",
			"producto": "CAMARA AHD EXTERIOR 1080P -TRASERA NTSC",
			"stock": 47,
			"precio_venta": 170,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/1.jpg",
			"slug": "camara-ahd-exterior-1080p-trasera-ntsc",
			"id": 124
		},
		{
			"codigo": "MI082",
			"producto": "CAMARA AHD EXTERIOR 720P - LATERAL NTSC ESPEJO",
			"stock": 5,
			"precio_venta": 160,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/10.jpg",
			"slug": "camara-ahd-exterior-720p-lateral-ntsc-espejo",
			"id": 125
		},
		{
			"codigo": "MI272",
			"producto": "CAMARA AHD EXTERIOR 720P - PANORAMICA NTSC",
			"stock": 3,
			"precio_venta": 160,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/3.jpg",
			"slug": "camara-ahd-exterior-720p-panoramica-ntsc",
			"id": 126
		},
		{
			"codigo": "MI241",
			"producto": "CAMARA AHD INALAMBRICA",
			"stock": 23,
			"precio_venta": 450,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/4.jpg",
			"slug": "camara-ahd-inalambrica",
			"id": 127
		},
		{
			"codigo": "MI346",
			"producto": "CAMARA AHD INTERIOR 1080P  C/ AUDIO METAL NTSC",
			"stock": 29,
			"precio_venta": 180,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/10.jpg",
			"slug": "camara-ahd-interior-1080p-c-audio-metal-ntsc",
			"id": 128
		},
		{
			"codigo": "MI357",
			"producto": "CAMARA AHD INTERIOR 1080P -DOMO METAL NTSC",
			"stock": 17,
			"precio_venta": 170,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/1.jpg",
			"slug": "camara-ahd-interior-1080p-domo-metal-ntsc",
			"id": 129
		},
		{
			"codigo": "MI347",
			"producto": "CAMARA AHD INTERIOR 1080P -MINI ESPIA",
			"stock": 8,
			"precio_venta": 170,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/8.jpg",
			"slug": "camara-ahd-interior-1080p-mini-espia",
			"id": 130
		},
		{
			"codigo": "MI243",
			"producto": "CAMARA AHD INTERIOR 720P - METAL NTSC",
			"stock": 11,
			"precio_venta": 160,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/9.jpg",
			"slug": "camara-ahd-interior-720p-metal-ntsc",
			"id": 131
		},
		{
			"codigo": "MI086",
			"producto": "CAMARA AHD INTERIOR 720P -DOMO NTSC",
			"stock": 1,
			"precio_venta": 150,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/4.jpg",
			"slug": "camara-ahd-interior-720p-domo-ntsc",
			"id": 132
		},
		{
			"codigo": "MI087",
			"producto": "CAMARA AHD INTERIOR 720P -MINI ESPIA",
			"stock": 11,
			"precio_venta": 160,
			"categoria": "Camaras",
			"subcategoria": "Analógica",
			"src_image": "/images/products/1.jpg",
			"slug": "camara-ahd-interior-720p-mini-espia",
			"id": 133
		},
		{
			"codigo": "MI366",
			"producto": "Cámara Dash Cam Wifi DVR 128Gb 1080p - Cigarrera 12v",
			"stock": 10,
			"precio_venta": 240,
			"categoria": "Camaras",
			"subcategoria": "Wifi",
			"src_image": "/images/products/10.jpg",
			"slug": "cmara-dash-cam-wifi-dvr-128gb-1080p-cigarrera-12v",
			"id": 134
		},
		{
			"codigo": "MI097",
			"producto": "CAMARA EXTERIOR AV 720P LATERAL NTSC",
			"stock": 15,
			"precio_venta": 160,
			"categoria": "Camaras",
			"src_image": "/images/products/5.jpg",
			"slug": "camara-exterior-av-720p-lateral-ntsc",
			"id": 135
		},
		{
			"codigo": "MI216",
			"producto": "CAMARA EXTERIOR AV 720P LATERAL PLANA NTSC",
			"stock": 15,
			"precio_venta": 160,
			"categoria": "Camaras",
			"src_image": "/images/products/7.jpg",
			"slug": "camara-exterior-av-720p-lateral-plana-ntsc",
			"id": 136
		},
		{
			"codigo": "MI098",
			"producto": "CAMARA EXTERIOR AV 720P TRASERA NTSC",
			"stock": 47,
			"precio_venta": 160,
			"categoria": "Camaras",
			"src_image": "/images/products/2.jpg",
			"slug": "camara-exterior-av-720p-trasera-ntsc",
			"id": 137
		},
		{
			"codigo": "MI099",
			"producto": "CAMARA INTERIOR AV 720P DOMO NTSC",
			"stock": 21,
			"precio_venta": 160,
			"categoria": "Camaras",
			"src_image": "/images/products/8.jpg",
			"slug": "camara-interior-av-720p-domo-ntsc",
			"id": 138
		},
		{
			"codigo": "MI361",
			"producto": "Camara Retroceso  Auto 360 Kit 4 Camaras",
			"stock": 3,
			"precio_venta": 1300,
			"categoria": "Camaras",
			"src_image": "/images/products/7.jpg",
			"slug": "camara-retroceso-auto-360-kit-4-camaras",
			"id": 139
		},
		{
			"codigo": "MI093",
			"producto": "Camara Retroceso  Auto Tipo Boton",
			"stock": 8,
			"precio_venta": 65,
			"categoria": "Camaras",
			"src_image": "/images/products/3.jpg",
			"slug": "camara-retroceso-auto-tipo-boton",
			"id": 140
		},
		{
			"codigo": "MI094",
			"producto": "Camara Retroceso  Auto Tipo Perno",
			"stock": 10,
			"precio_venta": 90,
			"categoria": "Camaras",
			"src_image": "/images/products/10.jpg",
			"slug": "camara-retroceso-auto-tipo-perno",
			"id": 141
		},
		{
			"codigo": "MI095",
			"producto": "Camara Retroceso Auto Interior Mini Domo",
			"stock": 10,
			"precio_venta": 90,
			"categoria": "Camaras",
			"src_image": "/images/products/5.jpg",
			"slug": "camara-retroceso-auto-interior-mini-domo",
			"id": 142
		},
		{
			"codigo": "MI342",
			"producto": "Camara Retroceso Auto Porta Placa Metal 8 led IR",
			"stock": 11,
			"precio_venta": 140,
			"categoria": "Camaras",
			"src_image": "/images/products/4.jpg",
			"slug": "camara-retroceso-auto-porta-placa-metal-8-led-ir",
			"id": 143
		},
		{
			"codigo": "MI089",
			"producto": "Camara Vigilancia IP SriHome Exterior SH028 PTZ DOMO",
			"stock": 4,
			"precio_venta": 650,
			"categoria": "Camaras",
			"subcategoria": "IP",
			"src_image": "/images/products/1.jpg",
			"slug": "camara-vigilancia-ip-srihome-exterior-sh028-ptz-domo",
			"id": 144
		},
		{
			"codigo": "MI090",
			"producto": "Camara Vigilancia IP SriHome Exterior SH035 Starlight",
			"stock": 11,
			"precio_venta": 350,
			"categoria": "Camaras",
			"subcategoria": "IP",
			"src_image": "/images/products/9.jpg",
			"slug": "camara-vigilancia-ip-srihome-exterior-sh035-starlight",
			"id": 145
		},
		{
			"codigo": "MI091",
			"producto": "Camara Vigilancia IP SriHome Interior SH020 Auto Tracking",
			"stock": 18,
			"precio_venta": 300,
			"categoria": "Camaras",
			"subcategoria": "IP",
			"src_image": "/images/products/2.jpg",
			"slug": "camara-vigilancia-ip-srihome-interior-sh020-auto-tracking",
			"id": 146
		},
		{
			"codigo": "MI092",
			"producto": "Camara Vigilancia IP SriHome Interior SH030",
			"stock": 8,
			"precio_venta": 300,
			"categoria": "Camaras",
			"subcategoria": "IP",
			"src_image": "/images/products/2.jpg",
			"slug": "camara-vigilancia-ip-srihome-interior-sh030",
			"id": 147
		},
		{
			"codigo": "MI208",
			"producto": "Capturadora Video RCA 4 Canales",
			"stock": 20,
			"precio_venta": 65,
			"categoria": "Video",
			"src_image": "/images/products/5.jpg",
			"slug": "capturadora-video-rca-4-canales",
			"id": 148
		},
		{
			"codigo": "MI100",
			"producto": "Capturadora Video RCA Video capture Easy cap",
			"stock": 10,
			"precio_venta": 50,
			"categoria": "Video",
			"src_image": "/images/products/4.jpg",
			"slug": "capturadora-video-rca-video-capture-easy-cap",
			"id": 149
		},
		{
			"codigo": "MI101",
			"producto": "Capturadora Video USB 2.0 HDMI",
			"stock": 11,
			"precio_venta": 80,
			"categoria": "Video",
			"src_image": "/images/products/1.jpg",
			"slug": "capturadora-video-usb-20-hdmi",
			"id": 150
		},
		{
			"codigo": "MI102",
			"producto": "Capturadora Video USB 3.0 HD HDMI",
			"stock": 3,
			"precio_venta": 300,
			"categoria": "Video",
			"src_image": "/images/products/2.jpg",
			"slug": "capturadora-video-usb-30-hd-hdmi",
			"id": 151
		},
		{
			"codigo": "MI201",
			"producto": "Cargador Auto  Doble USB Carga Rapida",
			"stock": 7,
			"precio_venta": 45,
			"categoria": "Cargadores",
			"src_image": "/images/products/3.jpg",
			"slug": "cargador-auto-doble-usb-carga-rapida",
			"id": 152
		},
		{
			"codigo": "MI058",
			"producto": "Cargador Auto Cigarrera DC 12v ",
			"stock": 8,
			"precio_venta": 17,
			"categoria": "Cargadores",
			"src_image": "/images/products/5.jpg",
			"slug": "cargador-auto-cigarrera-dc-12v",
			"id": 153
		},
		{
			"codigo": "MI258",
			"producto": "Cargador Inalambrico QI 15w Carga Rapida",
			"stock": 8,
			"precio_venta": 80,
			"categoria": "Cargadores",
			"src_image": "/images/products/5.jpg",
			"slug": "cargador-inalambrico-qi-15w-carga-rapida",
			"id": 154
		},
		{
			"codigo": "MI104",
			"producto": "Cargador LCD Universal 220v",
			"stock": 13,
			"precio_venta": 35,
			"categoria": "Cargadores",
			"src_image": "/images/products/2.jpg",
			"slug": "cargador-lcd-universal-220v",
			"id": 155
		},
		{
			"codigo": "MI105",
			"producto": "Cargador QI",
			"stock": 8,
			"precio_venta": 30,
			"categoria": "Cargadores",
			"src_image": "/images/products/4.jpg",
			"slug": "cargador-qi",
			"id": 156
		},
		{
			"codigo": "MI108",
			"producto": "Clip Holder PS3",
			"stock": 3,
			"precio_venta": 40,
			"categoria": "Accesorios",
			"src_image": "/images/products/6.jpg",
			"slug": "clip-holder-ps3",
			"id": 157
		},
		{
			"codigo": "MI109",
			"producto": "Clip Holder PS4",
			"stock": 9,
			"precio_venta": 40,
			"categoria": "Accesorios",
			"src_image": "/images/products/6.jpg",
			"slug": "clip-holder-ps4",
			"id": 158
		},
		{
			"codigo": "MI215",
			"producto": "Conector UFL Hembra X 2 und.",
			"stock": 0,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/5.jpg",
			"slug": "conector-ufl-hembra-x-2-und",
			"id": 159
		},
		{
			"codigo": "MI360",
			"producto": "Conector UFL MHF4 Hembra X 2 und.",
			"stock": 10,
			"precio_venta": 10,
			"categoria": "Adaptadores",
			"src_image": "/images/products/6.jpg",
			"slug": "conector-ufl-mhf4-hembra-x-2-und",
			"id": 160
		},
		{
			"codigo": "MI269",
			"producto": "Consola Retro ARCADE 256 Juegos",
			"stock": 3,
			"precio_venta": 70,
			"categoria": "Otros",
			"src_image": "/images/products/4.jpg",
			"slug": "consola-retro-arcade-256-juegos",
			"id": 161
		},
		{
			"codigo": "MI111",
			"producto": "Convertidor  VGA a HDMI",
			"stock": 4,
			"precio_venta": 45,
			"categoria": "Adaptadores",
			"src_image": "/images/products/9.jpg",
			"slug": "convertidor-vga-a-hdmi",
			"id": 162
		},
		{
			"codigo": "MI112",
			"producto": "Convertidor  VGA a RCA TV",
			"stock": 0,
			"precio_venta": 70,
			"categoria": "Adaptadores",
			"src_image": "/images/products/3.jpg",
			"slug": "convertidor-vga-a-rca-tv",
			"id": 163
		},
		{
			"codigo": "MI113",
			"producto": "Convertidor Audio Optico a Rca",
			"stock": 6,
			"precio_venta": 50,
			"categoria": "Adaptadores",
			"src_image": "/images/products/3.jpg",
			"slug": "convertidor-audio-optico-a-rca",
			"id": 164
		},
		{
			"codigo": "MI114",
			"producto": "Convertidor Audio Rca -Optico",
			"stock": 2,
			"precio_venta": 90,
			"categoria": "Adaptadores",
			"src_image": "/images/products/7.jpg",
			"slug": "convertidor-audio-rca-optico",
			"id": 165
		},
		{
			"codigo": "MI115",
			"producto": "Convertidor de BNC a VGA",
			"stock": 1,
			"precio_venta": 80,
			"categoria": "Adaptadores",
			"src_image": "/images/products/6.jpg",
			"slug": "convertidor-de-bnc-a-vga",
			"id": 166
		},
		{
			"codigo": "MI116",
			"producto": "Convertidor de HDMI a VGA",
			"stock": 2,
			"precio_venta": 45,
			"categoria": "Adaptadores",
			"src_image": "/images/products/6.jpg",
			"slug": "convertidor-de-hdmi-a-vga",
			"id": 167
		},
		{
			"codigo": "MI117",
			"producto": "Convertidor Display Port-HDMI",
			"stock": 14,
			"precio_venta": 30,
			"categoria": "Adaptadores",
			"src_image": "/images/products/1.jpg",
			"slug": "convertidor-display-port-hdmi",
			"id": 168
		},
		{
			"codigo": "MI118",
			"producto": "Convertidor Display Port-VGA",
			"stock": 31,
			"precio_venta": 30,
			"categoria": "Adaptadores",
			"src_image": "/images/products/9.jpg",
			"slug": "convertidor-display-port-vga",
			"id": 169
		},
		{
			"codigo": "MI232",
			"producto": "Convertidor HDMI a VGA MINI",
			"stock": 11,
			"precio_venta": 25,
			"categoria": "Adaptadores",
			"src_image": "/images/products/2.jpg",
			"slug": "convertidor-hdmi-a-vga-mini",
			"id": 170
		},
		{
			"codigo": "MI119",
			"producto": "Convertidor Hdmi-Rca",
			"stock": 2,
			"precio_venta": 45,
			"categoria": "Adaptadores",
			"src_image": "/images/products/10.jpg",
			"slug": "convertidor-hdmi-rca",
			"id": 171
		},
		{
			"codigo": "MI120",
			"producto": "Convertidor Mini D. Port-HDMI",
			"stock": 11,
			"precio_venta": 30,
			"categoria": "Adaptadores",
			"src_image": "/images/products/6.jpg",
			"slug": "convertidor-mini-d-port-hdmi",
			"id": 172
		},
		{
			"codigo": "MI121",
			"producto": "Convertidor Mini D. Port-VGA",
			"stock": 18,
			"precio_venta": 30,
			"categoria": "Adaptadores",
			"src_image": "/images/products/9.jpg",
			"slug": "convertidor-mini-d-port-vga",
			"id": 173
		},
		{
			"codigo": "MI122",
			"producto": "Convertidor Rca a Hdmi",
			"stock": 5,
			"precio_venta": 45,
			"categoria": "Adaptadores",
			"src_image": "/images/products/1.jpg",
			"slug": "convertidor-rca-a-hdmi",
			"id": 174
		},
		{
			"codigo": "MI123",
			"producto": "Convertidor Rca a VGA",
			"stock": 1,
			"precio_venta": 70,
			"categoria": "Adaptadores",
			"src_image": "/images/products/10.jpg",
			"slug": "convertidor-rca-a-vga",
			"id": 175
		},
		{
			"codigo": "MI124",
			"producto": "Convertidor USB 3.0 a HDMI",
			"stock": 10,
			"precio_venta": 90,
			"categoria": "Adaptadores",
			"src_image": "/images/products/2.jpg",
			"slug": "convertidor-usb-30-a-hdmi",
			"id": 176
		},
		{
			"codigo": "MI125",
			"producto": "Convertidor USB 3.0 a VGA",
			"stock": 5,
			"precio_venta": 70,
			"categoria": "Adaptadores",
			"src_image": "/images/products/3.jpg",
			"slug": "convertidor-usb-30-a-vga",
			"id": 177
		},
		{
			"codigo": "MI126",
			"producto": "Convertidor USB TIPO C a Hdmi",
			"stock": 1,
			"precio_venta": 60,
			"categoria": "Adaptadores",
			"src_image": "/images/products/2.jpg",
			"slug": "convertidor-usb-tipo-c-a-hdmi",
			"id": 178
		},
		{
			"codigo": "MI127",
			"producto": "Convertidor USB TIPO C a VGA",
			"stock": 7,
			"precio_venta": 60,
			"categoria": "Adaptadores",
			"src_image": "/images/products/7.jpg",
			"slug": "convertidor-usb-tipo-c-a-vga",
			"id": 179
		},
		{
			"codigo": "MI362",
			"producto": "Cortadora de Cesped Inalambrica",
			"stock": 5,
			"precio_venta": 560,
			"categoria": "Otros",
			"src_image": "/images/products/4.jpg",
			"slug": "cortadora-de-cesped-inalambrica",
			"id": 180
		},
		{
			"codigo": "MI324",
			"producto": "Cortadora de Pelo y Afeitador Wahl 18 piezas",
			"stock": 4,
			"precio_venta": 160,
			"categoria": "Otros",
			"src_image": "/images/products/10.jpg",
			"slug": "cortadora-de-pelo-y-afeitador-wahl-18-piezas",
			"id": 181
		},
		{
			"codigo": "MI217",
			"producto": "COSTO DE ENVIO LIMA (24-48 HORAS)",
			"stock": 97,
			"precio_venta": 15,
			"categoria": "Envio",
			"src_image": "/images/products/5.jpg",
			"slug": "costo-de-envio-lima-24-48-horas",
			"id": 182
		},
		{
			"codigo": "MI219",
			"producto": "COSTO DE ENVIO PROVINCIA (CIUDAD ALEJADA)",
			"stock": 99,
			"precio_venta": 25,
			"categoria": "Envio",
			"src_image": "/images/products/8.jpg",
			"slug": "costo-de-envio-provincia-ciudad-alejada",
			"id": 183
		},
		{
			"codigo": "MI218",
			"producto": "COSTO DE ENVIO PROVINCIA (CIUDAD PRINCIPAL)",
			"stock": 100,
			"precio_venta": 20,
			"categoria": "Envio",
			"src_image": "/images/products/5.jpg",
			"slug": "costo-de-envio-provincia-ciudad-principal",
			"id": 184
		},
		{
			"codigo": "MI176",
			"producto": "Destornillador Cross Phillips 1.5-2.0mm (2 Unidades)",
			"stock": 74,
			"precio_venta": 15,
			"categoria": "Destornilladores",
			"src_image": "/images/products/7.jpg",
			"slug": "destornillador-cross-phillips-15-20mm-2-unidades",
			"id": 185
		},
		{
			"codigo": "MI199",
			"producto": "Destornillador Gamebit 3.8-4.5mm (2 Unidades)",
			"stock": 14,
			"precio_venta": 40,
			"categoria": "Destornilladores",
			"src_image": "/images/products/4.jpg",
			"slug": "destornillador-gamebit-38-45mm-2-unidades",
			"id": 186
		},
		{
			"codigo": "MI248",
			"producto": "Destornillador Pentalobe 0.8m-1.2m + Torx T5 (3 und)",
			"stock": 8,
			"precio_venta": 25,
			"categoria": "Destornilladores",
			"src_image": "/images/products/1.jpg",
			"slug": "destornillador-pentalobe-08m-12m-torx-t5-3-und",
			"id": 187
		},
		{
			"codigo": "MI192",
			"producto": "Destornillador Pentalobe 0.8mm-1.2mm (2 Unidades)",
			"stock": 38,
			"precio_venta": 15,
			"categoria": "Destornilladores",
			"src_image": "/images/products/5.jpg",
			"slug": "destornillador-pentalobe-08mm-12mm-2-unidades",
			"id": 188
		},
		{
			"codigo": "MI193",
			"producto": "Destornillador T4  T5 T6  (3 Unidades)",
			"stock": 16,
			"precio_venta": 20,
			"categoria": "Destornilladores",
			"src_image": "/images/products/9.jpg",
			"slug": "destornillador-t4-t5-t6-3-unidades",
			"id": 189
		},
		{
			"codigo": "MI207",
			"producto": "Destornillador Triangulo Spanner Triwing PHILIPS (4 Unidades)",
			"stock": 4,
			"precio_venta": 80,
			"categoria": "Destornilladores",
			"src_image": "/images/products/6.jpg",
			"slug": "destornillador-triangulo-spanner-triwing-philips-4-unidades",
			"id": 190
		},
		{
			"codigo": "MI128",
			"producto": "Destornillador Tri-Wing Cross (2 Unidades)",
			"stock": 5,
			"precio_venta": 15,
			"categoria": "Destornilladores",
			"src_image": "/images/products/8.jpg",
			"slug": "destornillador-tri-wing-cross-2-unidades",
			"id": 191
		},
		{
			"codigo": "MI271",
			"producto": "Disco Duro HP Sata Solido SSD 1tb",
			"stock": 4,
			"precio_venta": 260,
			"categoria": "Almacenamiento",
			"subcategoria": "HDD",
			"src_image": "/images/products/1.jpg",
			"slug": "disco-duro-hp-sata-solido-ssd-1tb",
			"id": 192
		},
		{
			"codigo": "MI273",
			"producto": "Disco Duro HP Sata Solido SSD 240Gb",
			"stock": 2,
			"precio_venta": 100,
			"categoria": "Almacenamiento",
			"subcategoria": "HDD",
			"src_image": "/images/products/8.jpg",
			"slug": "disco-duro-hp-sata-solido-ssd-240gb",
			"id": 193
		},
		{
			"codigo": "MI274",
			"producto": "Disco Duro HP Sata Solido SSD 500Gb",
			"stock": 3,
			"precio_venta": 170,
			"categoria": "Almacenamiento",
			"subcategoria": "HDD",
			"src_image": "/images/products/10.jpg",
			"slug": "disco-duro-hp-sata-solido-ssd-500gb",
			"id": 194
		},
		{
			"codigo": "MI275",
			"producto": "Disco SSD HP S700 M.2 500Gb",
			"stock": 5,
			"precio_venta": 155,
			"categoria": "Almacenamiento",
			"subcategoria": "SSD",
			"src_image": "/images/products/8.jpg",
			"slug": "disco-ssd-hp-s700-m2-500gb",
			"id": 195
		},
		{
			"codigo": "MI276",
			"producto": "Disco SSD Kingston NV1 500Gb",
			"stock": 5,
			"precio_venta": 170,
			"categoria": "Almacenamiento",
			"subcategoria": "SSD",
			"src_image": "/images/products/9.jpg",
			"slug": "disco-ssd-kingston-nv1-500gb",
			"id": 196
		},
		{
			"codigo": "MI130",
			"producto": "Extension HDMI-RJ45 (30 Metros)",
			"stock": 31,
			"precio_venta": 30,
			"categoria": "Accesorios",
			"subcategoria": "Video",
			"src_image": "/images/products/5.jpg",
			"slug": "extension-hdmi-rj45-30-metros",
			"id": 197
		},
		{
			"codigo": "MI131",
			"producto": "Extension HDMI-RJ45 (60 Metros)",
			"stock": 2,
			"precio_venta": 250,
			"categoria": "Accesorios",
			"subcategoria": "Video",
			"src_image": "/images/products/5.jpg",
			"slug": "extension-hdmi-rj45-60-metros",
			"id": 198
		},
		{
			"codigo": "MI132",
			"producto": "Extension USB-RJ45 (50 Metros)",
			"stock": 5,
			"precio_venta": 40,
			"categoria": "Accesorios",
			"src_image": "/images/products/1.jpg",
			"slug": "extension-usb-rj45-50-metros",
			"id": 199
		},
		{
			"codigo": "MI133",
			"producto": "Extension VGA por cable Red RJ45 (PAR) hembra",
			"stock": 17,
			"precio_venta": 30,
			"categoria": "Accesorios",
			"src_image": "/images/products/5.jpg",
			"slug": "extension-vga-por-cable-red-rj45-par-hembra",
			"id": 200
		},
		{
			"codigo": "MI107",
			"producto": "Extractor Tornillos Pernos Rotos",
			"stock": 18,
			"precio_venta": 35,
			"categoria": "Accesorios",
			"src_image": "/images/products/5.jpg",
			"slug": "extractor-tornillos-pernos-rotos",
			"id": 201
		},
		{
			"codigo": "MI303",
			"producto": "Inclinometro Digital HUD Vehicular M50",
			"stock": 19,
			"precio_venta": 290,
			"categoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "inclinometro-digital-hud-vehicular-m50",
			"id": 202
		},
		{
			"codigo": "MI302",
			"producto": "Inclinometro Digital HUD Vehicular S94",
			"stock": 17,
			"precio_venta": 320,
			"categoria": "Otros",
			"src_image": "/images/products/7.jpg",
			"slug": "inclinometro-digital-hud-vehicular-s94",
			"id": 203
		},
		{
			"codigo": "MI282",
			"producto": "Kit Sirena + Boton Panico + Sensor 220v",
			"stock": 5,
			"precio_venta": 230,
			"categoria": "Seguridad",
			"src_image": "/images/products/2.jpg",
			"slug": "kit-sirena-boton-panico-sensor-220v",
			"id": 204
		},
		{
			"codigo": "MI200",
			"producto": "Lampara Linterna Led USB",
			"stock": 35,
			"precio_venta": 10,
			"categoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "lampara-linterna-led-usb",
			"id": 205
		},
		{
			"codigo": "MI138",
			"producto": "Lente Play Station 2 Slim",
			"stock": 7,
			"precio_venta": 60,
			"categoria": "Otros",
			"src_image": "/images/products/6.jpg",
			"slug": "lente-play-station-2-slim",
			"id": 206
		},
		{
			"codigo": "MI259",
			"producto": "Llavero Juego Calamar Pack x 4 Unidades",
			"stock": 47,
			"precio_venta": 50,
			"categoria": "Otros",
			"src_image": "/images/products/4.jpg",
			"slug": "llavero-juego-calamar-pack-x-4-unidades",
			"id": 207
		},
		{
			"codigo": "MI139",
			"producto": "Luz Led USB PARTY",
			"stock": 5,
			"precio_venta": 15,
			"categoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "luz-led-usb-party",
			"id": 208
		},
		{
			"codigo": "MI350",
			"producto": "Mdvr Grabador 4G / GPS / ADAS / DSM 512GB",
			"stock": 7,
			"precio_venta": 1600,
			"categoria": "MDVR",
			"src_image": "/images/products/1.jpg",
			"slug": "mdvr-grabador-4g-gps-adas-dsm-512gb",
			"id": 209
		},
		{
			"codigo": "MI359",
			"producto": "Mdvr Grabador 4G / GPS / ADAS / DSM 512GB - 8CH",
			"stock": 4,
			"precio_venta": 2500,
			"categoria": "MDVR",
			"src_image": "/images/products/2.jpg",
			"slug": "mdvr-grabador-4g-gps-adas-dsm-512gb-8ch",
			"id": 210
		},
		{
			"codigo": "MI252",
			"producto": "Mdvr Grabador 4G / GPS / RJ45 512GB",
			"stock": 2,
			"precio_venta": 1500,
			"categoria": "MDVR",
			"src_image": "/images/products/2.jpg",
			"slug": "mdvr-grabador-4g-gps-rj45-512gb",
			"id": 211
		},
		{
			"codigo": "MI265",
			"producto": "Mdvr Grabador 4G / GPS 512GB",
			"stock": 28,
			"precio_venta": 1500,
			"categoria": "MDVR",
			"src_image": "/images/products/9.jpg",
			"slug": "mdvr-grabador-4g-gps-512gb",
			"id": 212
		},
		{
			"codigo": "MI264",
			"producto": "Mdvr Grabador 512GB DVR 4 canales VGA",
			"stock": 24,
			"precio_venta": 500,
			"categoria": "MDVR",
			"src_image": "/images/products/4.jpg",
			"slug": "mdvr-grabador-512gb-dvr-4-canales-vga",
			"id": 213
		},
		{
			"codigo": "MI294",
			"producto": "Mdvr Grabador 512GB DVR 4 canales VGA SD 256/2 TB",
			"stock": 6,
			"precio_venta": 1100,
			"categoria": "MDVR",
			"src_image": "/images/products/4.jpg",
			"slug": "mdvr-grabador-512gb-dvr-4-canales-vga-sd-2562-tb",
			"id": 214
		},
		{
			"codigo": "MI256",
			"producto": "Mdvr Grabador 8 Canales 256GB / 2TB",
			"stock": 10,
			"precio_venta": 1250,
			"categoria": "MDVR",
			"src_image": "/images/products/4.jpg",
			"slug": "mdvr-grabador-8-canales-256gb-2tb",
			"id": 215
		},
		{
			"codigo": "MI212",
			"producto": "Medidor de Aire Llantas Manometro",
			"stock": 7,
			"precio_venta": 45,
			"categoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "medidor-de-aire-llantas-manometro",
			"id": 216
		},
		{
			"codigo": "MI140",
			"producto": "Medidor de cocadas Llantas",
			"stock": 41,
			"precio_venta": 45,
			"categoria": "Otros",
			"src_image": "/images/products/4.jpg",
			"slug": "medidor-de-cocadas-llantas",
			"id": 217
		},
		{
			"codigo": "MI355",
			"producto": "Medidor de Distancia Laser 100M Telemetro",
			"stock": 10,
			"precio_venta": 380,
			"categoria": "Otros",
			"src_image": "/images/products/3.jpg",
			"slug": "medidor-de-distancia-laser-100m-telemetro",
			"id": 218
		},
		{
			"codigo": "MI266",
			"producto": "Memoria Micro SD 512Gb Western Digital",
			"stock": 6,
			"precio_venta": 500,
			"categoria": "Almacenamiento",
			"src_image": "/images/products/7.jpg",
			"slug": "memoria-micro-sd-512gb-western-digital",
			"id": 219
		},
		{
			"codigo": "MI141",
			"producto": "Memoria Micro SD Kingston 128GB C-10",
			"stock": 33,
			"precio_venta": 90,
			"categoria": "Almacenamiento",
			"src_image": "/images/products/6.jpg",
			"slug": "memoria-micro-sd-kingston-128gb-c-10",
			"id": 220
		},
		{
			"codigo": "MI142",
			"producto": "Memoria Micro SD Kingston 16GB C-10",
			"stock": 7,
			"precio_venta": 20,
			"categoria": "Almacenamiento",
			"src_image": "/images/products/6.jpg",
			"slug": "memoria-micro-sd-kingston-16gb-c-10",
			"id": 221
		},
		{
			"codigo": "MI106",
			"producto": "Memoria Micro SD Kingston 256GB C-10",
			"stock": 29,
			"precio_venta": 200,
			"categoria": "Almacenamiento",
			"src_image": "/images/products/3.jpg",
			"slug": "memoria-micro-sd-kingston-256gb-c-10",
			"id": 222
		},
		{
			"codigo": "MI144",
			"producto": "Memoria Micro SD kingston 32GB C-10",
			"stock": 5,
			"precio_venta": 30,
			"categoria": "Almacenamiento",
			"src_image": "/images/products/3.jpg",
			"slug": "memoria-micro-sd-kingston-32gb-c-10",
			"id": 223
		},
		{
			"codigo": "MI145",
			"producto": "Memoria Micro SD SanDisk 64GB C-10",
			"stock": 3,
			"precio_venta": 45,
			"categoria": "Almacenamiento",
			"src_image": "/images/products/2.jpg",
			"slug": "memoria-micro-sd-sandisk-64gb-c-10",
			"id": 224
		},
		{
			"codigo": "MI146",
			"producto": "Memoria Play Station PS2 128mb",
			"stock": 1,
			"precio_venta": 45,
			"categoria": "Almacenamiento",
			"src_image": "/images/products/9.jpg",
			"slug": "memoria-play-station-ps2-128mb",
			"id": 225
		},
		{
			"codigo": "MI358",
			"producto": "Memoria Play Station PS2 256Mb",
			"stock": 5,
			"precio_venta": 45,
			"categoria": "Almacenamiento",
			"src_image": "/images/products/9.jpg",
			"slug": "memoria-play-station-ps2-256mb",
			"id": 226
		},
		{
			"codigo": "MI255",
			"producto": "Micrometro Digital",
			"stock": 40,
			"precio_venta": 60,
			"categoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "micrometro-digital",
			"id": 227
		},
		{
			"codigo": "MI263",
			"producto": "Mini bomba de Motor sumergible DC 3-5V, 70-120L/H",
			"stock": 20,
			"precio_venta": 15,
			"categoria": "Otros",
			"src_image": "/images/products/6.jpg",
			"slug": "mini-bomba-de-motor-sumergible-dc-3-5v-70-120lh",
			"id": 228
		},
		{
			"codigo": "MI147",
			"producto": "Mini Camara Espia IP WIFI A9",
			"stock": 9,
			"precio_venta": 200,
			"categoria": "Camaras",
			"src_image": "/images/products/7.jpg",
			"slug": "mini-camara-espia-ip-wifi-a9",
			"id": 229
		},
		{
			"codigo": "MI148",
			"producto": "Mini Camara Espia S7 Magnetica",
			"stock": 1,
			"precio_venta": 90,
			"categoria": "Camaras",
			"src_image": "/images/products/3.jpg",
			"slug": "mini-camara-espia-s7-magnetica",
			"id": 230
		},
		{
			"codigo": "MI149",
			"producto": "Mini Camara Espia SQ8",
			"stock": 16,
			"precio_venta": 55,
			"categoria": "Camaras",
			"src_image": "/images/products/1.jpg",
			"slug": "mini-camara-espia-sq8",
			"id": 231
		},
		{
			"codigo": "MI293",
			"producto": "Mini Compresor Aire 12v 250PSI",
			"stock": 1,
			"precio_venta": 60,
			"categoria": "Otros",
			"src_image": "/images/products/1.jpg",
			"slug": "mini-compresor-aire-12v-250psi",
			"id": 232
		},
		{
			"codigo": "MI356",
			"producto": "Mini Taladro Electrico 12v con Transformador",
			"stock": 2,
			"precio_venta": 100,
			"categoria": "Otros",
			"src_image": "/images/products/6.jpg",
			"slug": "mini-taladro-electrico-12v-con-transformador",
			"id": 233
		},
		{
			"codigo": "MI239",
			"producto": "Modulo Cargador Baterias Litio Micro USB Tp4056  (Lote x 2)",
			"stock": 17,
			"precio_venta": 10,
			"categoria": "Módulos",
			"src_image": "/images/products/10.jpg",
			"slug": "modulo-cargador-baterias-litio-micro-usb-tp4056-lote-x-2",
			"id": 234
		},
		{
			"codigo": "MI253",
			"producto": "Modulo Cargador Baterias USB Tipo C Tp4056",
			"stock": 28,
			"precio_venta": 5,
			"categoria": "Módulos",
			"src_image": "/images/products/2.jpg",
			"slug": "modulo-cargador-baterias-usb-tipo-c-tp4056",
			"id": 235
		},
		{
			"codigo": "MI238",
			"producto": "Modulo Cii Nivel Lógico Bi-direccional 3.3v - 5v (Lote x 2) 8 pin",
			"stock": 37,
			"precio_venta": 15,
			"categoria": "Módulos",
			"src_image": "/images/products/10.jpg",
			"slug": "modulo-cii-nivel-lgico-bi-direccional-33v-5v-lote-x-2-8-pin",
			"id": 236
		},
		{
			"codigo": "MI221",
			"producto": "Modulo Cii Nivel Lógico Bi-direccional 3.3v - 5v (Lote x 5 uni)",
			"stock": 30,
			"precio_venta": 15,
			"categoria": "Módulos",
			"src_image": "/images/products/9.jpg",
			"slug": "modulo-cii-nivel-lgico-bi-direccional-33v-5v-lote-x-5-uni",
			"id": 237
		},
		{
			"codigo": "MI222",
			"producto": "Modulo Esp32 Wifi Bluetooth 38 Pines",
			"stock": 34,
			"precio_venta": 35,
			"categoria": "Módulos",
			"src_image": "/images/products/3.jpg",
			"slug": "modulo-esp32-wifi-bluetooth-38-pines",
			"id": 238
		},
		{
			"codigo": "MI290",
			"producto": "Módulo Matriz Ws2812b Led 5050 8x8 64 Bits Led Rgb 5v",
			"stock": 9,
			"precio_venta": 35,
			"categoria": "Módulos",
			"src_image": "/images/products/1.jpg",
			"slug": "mdulo-matriz-ws2812b-led-5050-8x8-64-bits-led-rgb-5v",
			"id": 239
		},
		{
			"codigo": "MI223",
			"producto": "Modulo Nodemcu Esp8266 CP2102 V 2.0 Lua Wifi",
			"stock": 27,
			"precio_venta": 25,
			"categoria": "Módulos",
			"src_image": "/images/products/3.jpg",
			"slug": "modulo-nodemcu-esp8266-cp2102-v-20-lua-wifi",
			"id": 240
		},
		{
			"codigo": "MI152",
			"producto": "MODULO REGULADOR DE VOLTAJE XL6009",
			"stock": 28,
			"precio_venta": 10,
			"categoria": "Módulos",
			"src_image": "/images/products/2.jpg",
			"slug": "modulo-regulador-de-voltaje-xl6009",
			"id": 241
		},
		{
			"codigo": "MI153",
			"producto": "Monitor  10,1 \"\" HDMI -VGA- AV -USB",
			"stock": 8,
			"precio_venta": 600,
			"categoria": "Pantallas",
			"src_image": "/images/products/6.jpg",
			"slug": "monitor-101-hdmi-vga-av-usb",
			"id": 242
		},
		{
			"codigo": "MI154",
			"producto": "Monitor  7\"\" HDMI -VGA- AV",
			"stock": 7,
			"precio_venta": 450,
			"categoria": "Pantallas",
			"src_image": "/images/products/10.jpg",
			"slug": "monitor-7-hdmi-vga-av",
			"id": 243
		},
		{
			"codigo": "MI313",
			"producto": "Multitester Digital Smart GD128 GDVA",
			"stock": 28,
			"precio_venta": 250,
			"categoria": "Multimetro",
			"src_image": "/images/products/10.jpg",
			"slug": "multitester-digital-smart-gd128-gdva",
			"id": 244
		},
		{
			"codigo": "MI353",
			"producto": "NIVELADOR LASER 4D 16 LINEAS",
			"stock": 9,
			"precio_venta": 650,
			"categoria": "Otros",
			"src_image": "/images/products/2.jpg",
			"slug": "nivelador-laser-4d-16-lineas",
			"id": 245
		},
		{
			"codigo": "MI365",
			"producto": "Pantalla 10\"\" AHD DVR TACTIL 128GB 4 CANALES",
			"stock": 5,
			"precio_venta": 850,
			"categoria": "Pantallas",
			"src_image": "/images/products/1.jpg",
			"slug": "pantalla-10-ahd-dvr-tactil-128gb-4-canales",
			"id": 246
		},
		{
			"codigo": "MI155",
			"producto": "Pantalla 7\"\"  DIVIDIDA 4 Camaras AV",
			"stock": 6,
			"precio_venta": 550,
			"categoria": "Pantallas",
			"src_image": "/images/products/9.jpg",
			"slug": "pantalla-7-dividida-4-camaras-av",
			"id": 247
		},
		{
			"codigo": "MI203",
			"producto": "Pantalla 7\"\" AHD DVR 128GB 2 CANALES",
			"stock": 37,
			"precio_venta": 500,
			"categoria": "Pantallas",
			"src_image": "/images/products/8.jpg",
			"slug": "pantalla-7-ahd-dvr-128gb-2-canales",
			"id": 248
		},
		{
			"codigo": "MI304",
			"producto": "Pantalla 7\"\" AHD DVR 256GB 4 CANALES",
			"stock": 3,
			"precio_venta": 700,
			"categoria": "Pantallas",
			"src_image": "/images/products/4.jpg",
			"slug": "pantalla-7-ahd-dvr-256gb-4-canales",
			"id": 249
		},
		{
			"codigo": "MI156",
			"producto": "Pantalla 7\"\" AV",
			"stock": 23,
			"precio_venta": 350,
			"categoria": "Pantallas",
			"src_image": "/images/products/2.jpg",
			"slug": "pantalla-7-av",
			"id": 250
		},
		{
			"codigo": "MI240",
			"producto": "Pantalla 7\"\" INALAMBRICA AHD",
			"stock": 12,
			"precio_venta": 650,
			"categoria": "Pantallas",
			"src_image": "/images/products/6.jpg",
			"slug": "pantalla-7-inalambrica-ahd",
			"id": 251
		},
		{
			"codigo": "MI158",
			"producto": "Pantalla Auto 5\"\" Plegable",
			"stock": 22,
			"precio_venta": 170,
			"categoria": "Pantallas",
			"src_image": "/images/products/3.jpg",
			"slug": "pantalla-auto-5-plegable",
			"id": 252
		},
		{
			"codigo": "MI159",
			"producto": "Pantalla Auto 5\"\" Pulgadas",
			"stock": 48,
			"precio_venta": 170,
			"categoria": "Pantallas",
			"src_image": "/images/products/1.jpg",
			"slug": "pantalla-auto-5-pulgadas",
			"id": 253
		},
		{
			"codigo": "MI270",
			"producto": "Parlante Inalambrico Bluetooth XBOOM Design",
			"stock": 2,
			"precio_venta": 60,
			"categoria": "Parlante",
			"src_image": "/images/products/1.jpg",
			"slug": "parlante-inalambrico-bluetooth-xboom-design",
			"id": 254
		},
		{
			"codigo": "MI161",
			"producto": "Presentador  Diapositiva PPT",
			"stock": 77,
			"precio_venta": 50,
			"categoria": "Presentador",
			"src_image": "/images/products/3.jpg",
			"slug": "presentador-diapositiva-ppt",
			"id": 255
		},
		{
			"codigo": "MI202",
			"producto": "Probador de bujía y bobina para auto",
			"stock": 11,
			"precio_venta": 45,
			"categoria": "Otros",
			"src_image": "/images/products/4.jpg",
			"slug": "probador-de-buja-y-bobina-para-auto",
			"id": 256
		},
		{
			"codigo": "MI162",
			"producto": "Protector de Pantalla 7\"\" Tapa Sol",
			"stock": 16,
			"precio_venta": 12,
			"categoria": "Accesorios",
			"src_image": "/images/products/8.jpg",
			"slug": "protector-de-pantalla-7-tapa-sol",
			"id": 257
		},
		{
			"codigo": "MI237",
			"producto": "Protector Palanca Moto",
			"stock": 17,
			"precio_venta": 15,
			"categoria": "Accesorios",
			"src_image": "/images/products/3.jpg",
			"slug": "protector-palanca-moto",
			"id": 258
		},
		{
			"codigo": "MI236",
			"producto": "Protector Zapato Moto",
			"stock": 22,
			"precio_venta": 20,
			"categoria": "Accesorios",
			"src_image": "/images/products/7.jpg",
			"slug": "protector-zapato-moto",
			"id": 259
		},
		{
			"codigo": "MI165",
			"producto": "Receptor QI All",
			"stock": 41,
			"precio_venta": 20,
			"categoria": "Otros",
			"src_image": "/images/products/5.jpg",
			"slug": "receptor-qi-all",
			"id": 260
		},
		{
			"codigo": "MI167",
			"producto": "Reloj Binario Led Samuray",
			"stock": 3,
			"precio_venta": 50,
			"categoria": "Relojes",
			"src_image": "/images/products/10.jpg",
			"slug": "reloj-binario-led-samuray",
			"id": 261
		},
		{
			"codigo": "MI168",
			"producto": "Reloj Binario Led Samuray Dama",
			"stock": 7,
			"precio_venta": 50,
			"categoria": "Relojes",
			"src_image": "/images/products/7.jpg",
			"slug": "reloj-binario-led-samuray-dama",
			"id": 262
		},
		{
			"codigo": "MI169",
			"producto": "Reloj Curren Cuero 8176",
			"stock": 4,
			"precio_venta": 70,
			"categoria": "Relojes",
			"src_image": "/images/products/1.jpg",
			"slug": "reloj-curren-cuero-8176",
			"id": 263
		},
		{
			"codigo": "MI044",
			"producto": "Repetidor Wifi Usb RJ45 Para Tv Smart",
			"stock": 1,
			"precio_venta": 100,
			"categoria": "Accesorios",
			"src_image": "/images/products/8.jpg",
			"slug": "repetidor-wifi-usb-rj45-para-tv-smart",
			"id": 264
		},
		{
			"codigo": "MI295",
			"producto": "Router Inalámbrico Wifi D-link Dir-819 Dual Band Ac750",
			"stock": 1,
			"precio_venta": 95,
			"categoria": "Modem",
			"src_image": "/images/products/7.jpg",
			"slug": "router-inalmbrico-wifi-d-link-dir-819-dual-band-ac750",
			"id": 265
		},
		{
			"codigo": "MI298",
			"producto": "Router TP-Link Wifi 4G LTE  TL-MR6400 300mbps",
			"stock": 2,
			"precio_venta": 450,
			"categoria": "Modem",
			"src_image": "/images/products/10.jpg",
			"slug": "router-tp-link-wifi-4g-lte-tl-mr6400-300mbps",
			"id": 266
		},
		{
			"codigo": "MI172",
			"producto": "Selector  Hdmi 3-1",
			"stock": 16,
			"precio_venta": 45,
			"categoria": "Video",
			"src_image": "/images/products/5.jpg",
			"slug": "selector-hdmi-3-1",
			"id": 267
		},
		{
			"codigo": "MI173",
			"producto": "Selector Audio Optico 1X3",
			"stock": 3,
			"precio_venta": 90,
			"categoria": "Video",
			"src_image": "/images/products/9.jpg",
			"slug": "selector-audio-optico-1x3",
			"id": 268
		},
		{
			"codigo": "MI194",
			"producto": "Selector RCA 3-1",
			"stock": 8,
			"precio_venta": 35,
			"categoria": "Video",
			"src_image": "/images/products/2.jpg",
			"slug": "selector-rca-3-1",
			"id": 269
		},
		{
			"codigo": "MI300",
			"producto": "Selladora de Bolsas al Vacio + 10 Bolsas",
			"stock": 1,
			"precio_venta": 120,
			"categoria": "Selladora",
			"src_image": "/images/products/6.jpg",
			"slug": "selladora-de-bolsas-al-vacio-10-bolsas",
			"id": 270
		},
		{
			"codigo": "MI277",
			"producto": "Sensor de Fatiga ",
			"stock": 40,
			"precio_venta": 550,
			"categoria": "Sensores",
			"src_image": "/images/products/5.jpg",
			"slug": "sensor-de-fatiga",
			"id": 271
		},
		{
			"codigo": "MI287",
			"producto": "Sensor de Fatiga DS 12-24V",
			"stock": 15,
			"precio_venta": 950,
			"categoria": "Sensores",
			"src_image": "/images/products/2.jpg",
			"slug": "sensor-de-fatiga-ds-12-24v",
			"id": 272
		},
		{
			"codigo": "MI280",
			"producto": "Sensor de Movimiento OPALUX 180º",
			"stock": 7,
			"precio_venta": 45,
			"categoria": "Sensores",
			"src_image": "/images/products/8.jpg",
			"slug": "sensor-de-movimiento-opalux-180",
			"id": 273
		},
		{
			"codigo": "MI281",
			"producto": "Sensor de Movimiento OPALUX 360º",
			"stock": 5,
			"precio_venta": 45,
			"categoria": "Sensores",
			"src_image": "/images/products/5.jpg",
			"slug": "sensor-de-movimiento-opalux-360",
			"id": 274
		},
		{
			"codigo": "MI249",
			"producto": "Sensor de Retroceso + Pantalla + Camara + Buzzer + Cable",
			"stock": 7,
			"precio_venta": 1100,
			"categoria": "Sensores",
			"src_image": "/images/products/3.jpg",
			"slug": "sensor-de-retroceso-pantalla-camara-buzzer-cable",
			"id": 275
		},
		{
			"codigo": "MI244",
			"producto": "Sensor de Retroceso 12-24v + Cable 15M ",
			"stock": 28,
			"precio_venta": 400,
			"categoria": "Sensores",
			"src_image": "/images/products/10.jpg",
			"slug": "sensor-de-retroceso-12-24v-cable-15m",
			"id": 276
		},
		{
			"codigo": "MI310",
			"producto": "Sensor de Retroceso 12-24v + Cable 15M (Redondo)",
			"stock": 7,
			"precio_venta": 400,
			"categoria": "Sensores",
			"src_image": "/images/products/3.jpg",
			"slug": "sensor-de-retroceso-12-24v-cable-15m-redondo",
			"id": 277
		},
		{
			"codigo": "MI312",
			"producto": "Sirena 12v DC 45W 6 Tonos Negra Opalux",
			"stock": 6,
			"precio_venta": 30,
			"categoria": "Accesorios",
			"src_image": "/images/products/9.jpg",
			"slug": "sirena-12v-dc-45w-6-tonos-negra-opalux",
			"id": 278
		},
		{
			"codigo": "MI315",
			"producto": "Sirena Alarma Wifi 110db + Transformador 220v",
			"stock": 3,
			"precio_venta": 180,
			"categoria": "Accesorios",
			"src_image": "/images/products/5.jpg",
			"slug": "sirena-alarma-wifi-110db-transformador-220v",
			"id": 279
		},
		{
			"codigo": "MI278",
			"producto": "Sirena OPALUX Blanca 90w",
			"stock": 3,
			"precio_venta": 90,
			"categoria": "Accesorios",
			"src_image": "/images/products/3.jpg",
			"slug": "sirena-opalux-blanca-90w",
			"id": 280
		},
		{
			"codigo": "MI345",
			"producto": "Sirena WIFI + Sensor de Movimiento ",
			"stock": 6,
			"precio_venta": 240,
			"categoria": "Accesorios",
			"src_image": "/images/products/8.jpg",
			"slug": "sirena-wifi-sensor-de-movimiento",
			"id": 281
		},
		{
			"codigo": "MI354",
			"producto": "Sirena WIFI + Sensor de Puerta/Ventana",
			"stock": 5,
			"precio_venta": 210,
			"categoria": "Accesorios",
			"src_image": "/images/products/5.jpg",
			"slug": "sirena-wifi-sensor-de-puertaventana",
			"id": 282
		},
		{
			"codigo": "MI037",
			"producto": "Splitter Audifonos 1x2",
			"stock": 15,
			"precio_venta": 15,
			"categoria": "Audio",
			"src_image": "/images/products/2.jpg",
			"slug": "splitter-audifonos-1x2",
			"id": 283
		},
		{
			"codigo": "MI179",
			"producto": "Splitter Audio Optico 1X2",
			"stock": 10,
			"precio_venta": 45,
			"categoria": "Audio",
			"src_image": "/images/products/4.jpg",
			"slug": "splitter-audio-optico-1x2",
			"id": 284
		},
		{
			"codigo": "MI288",
			"producto": "Splitter HDMI 1x2",
			"stock": 2,
			"precio_venta": 65,
			"categoria": "Accesorios",
			"src_image": "/images/products/10.jpg",
			"slug": "splitter-hdmi-1x2",
			"id": 285
		},
		{
			"codigo": "MI181",
			"producto": "Splitter HDMI 1x4",
			"stock": 1,
			"precio_venta": 85,
			"categoria": "Accesorios",
			"src_image": "/images/products/1.jpg",
			"slug": "splitter-hdmi-1x4",
			"id": 286
		},
		{
			"codigo": "MI286",
			"producto": "Tarjeta de Desarrollo STM32F411RE",
			"stock": 1,
			"precio_venta": 140,
			"categoria": "Modulos",
			"src_image": "/images/products/10.jpg",
			"slug": "tarjeta-de-desarrollo-stm32f411re",
			"id": 287
		},
		{
			"codigo": "MI182",
			"producto": "Tarjeta Red USB a RJ45",
			"stock": 30,
			"precio_venta": 25,
			"categoria": "Accesorios",
			"subcategoria": "Red",
			"src_image": "/images/products/2.jpg",
			"slug": "tarjeta-red-usb-a-rj45",
			"id": 288
		},
		{
			"codigo": "MI183",
			"producto": "Tarjeta Sonido USB 7.1",
			"stock": 20,
			"precio_venta": 15,
			"categoria": "Audio",
			"subcategoria": "Audio",
			"src_image": "/images/products/8.jpg",
			"slug": "tarjeta-sonido-usb-71",
			"id": 289
		},
		{
			"codigo": "MI150",
			"producto": "Tarjeta Sonido USB Tipo C ",
			"stock": 24,
			"precio_venta": 35,
			"categoria": "Audio",
			"subcategoria": "Audio",
			"src_image": "/images/products/5.jpg",
			"slug": "tarjeta-sonido-usb-tipo-c",
			"id": 290
		},
		{
			"codigo": "MI186",
			"producto": "Termometro Cocina Digital LCD BBQ",
			"stock": 47,
			"precio_venta": 25,
			"categoria": "Termómetro",
			"src_image": "/images/products/7.jpg",
			"slug": "termometro-cocina-digital-lcd-bbq",
			"id": 291
		},
		{
			"codigo": "MI343",
			"producto": "Termometro Higrometro Digital Lcd Con Sonda",
			"stock": 19,
			"precio_venta": 25,
			"categoria": "Termómetro",
			"src_image": "/images/products/8.jpg",
			"slug": "termometro-higrometro-digital-lcd-con-sonda",
			"id": 292
		},
		{
			"codigo": "MI187",
			"producto": "Termometro Horno 300° Colgador",
			"stock": 24,
			"precio_venta": 30,
			"categoria": "Termómetro",
			"src_image": "/images/products/4.jpg",
			"slug": "termometro-horno-300-colgador",
			"id": 293
		},
		{
			"codigo": "MI206",
			"producto": "Termometro Horno 400° Perno Largo",
			"stock": 34,
			"precio_venta": 80,
			"categoria": "Termómetro",
			"src_image": "/images/products/4.jpg",
			"slug": "termometro-horno-400-perno-largo",
			"id": 294
		},
		{
			"codigo": "MI151",
			"producto": "Termometro Horno 500° Perno",
			"stock": 33,
			"precio_venta": 70,
			"categoria": "Termómetro",
			"src_image": "/images/products/2.jpg",
			"slug": "termometro-horno-500-perno",
			"id": 295
		},
		{
			"codigo": "MI292",
			"producto": "Termometro Refrigeradora Congeladora -20 Grados",
			"stock": 25,
			"precio_venta": 30,
			"categoria": "Termómetro",
			"src_image": "/images/products/2.jpg",
			"slug": "termometro-refrigeradora-congeladora-20-grados",
			"id": 296
		},
		{
			"codigo": "MI188",
			"producto": "Transformador 24 V - 12 V",
			"stock": 50,
			"precio_venta": 45,
			"categoria": "Convertidores",
			"src_image": "/images/products/5.jpg",
			"slug": "transformador-24-v-12-v",
			"id": 297
		},
		{
			"codigo": "MI189",
			"producto": "Transmisor Video Inalambrico  Auto Camion ",
			"stock": 4,
			"precio_venta": 65,
			"categoria": "Convertidores",
			"src_image": "/images/products/3.jpg",
			"slug": "transmisor-video-inalambrico-auto-camion",
			"id": 298
		},
		{
			"codigo": "MI220",
			"producto": "UNION CABLE OPTICO",
			"stock": 38,
			"precio_venta": 15,
			"categoria": "Accesorios",
			"src_image": "/images/products/10.jpg",
			"slug": "union-cable-optico",
			"id": 299
		},
		{
			"codigo": "MI209",
			"producto": "Union RCA Hembra Lote x 5 unidades",
			"stock": 4,
			"precio_venta": 20,
			"categoria": "Accesorios",
			"src_image": "/images/products/3.jpg",
			"slug": "union-rca-hembra-lote-x-5-unidades",
			"id": 300
		},
		{
			"codigo": "MI213",
			"producto": "Union RCA Macho Lote x 5 unidades",
			"stock": 4,
			"precio_venta": 20,
			"categoria": "Accesorios",
			"src_image": "/images/products/3.jpg",
			"slug": "union-rca-macho-lote-x-5-unidades",
			"id": 301
		},
		{
			"codigo": "MI191",
			"producto": "Union RJ45",
			"stock": 7,
			"precio_venta": 15,
			"categoria": "Accesorios",
			"subcategoria": "Red",
			"src_image": "/images/products/8.jpg",
			"slug": "union-rj45",
			"id": 302
		}
	]);

	await db.insert(Category).values([
		{
			"title": "Accesorios",
			"srcImage": "/images/products/6.jpg",
			"slug": "accesorios",
			"id": 0
		},
		{
			"title": "Adaptadores",
			"srcImage": "/images/products/2.jpg",
			"slug": "adaptadores",
			"id": 1
		},
		{
			"title": "Almacenamiento",
			"srcImage": "/images/products/4.jpg",
			"slug": "almacenamiento",
			"id": 2
		},
		{
			"title": "Antenas",
			"srcImage": "/images/products/4.jpg",
			"slug": "antenas",
			"id": 3
		},
		{
			"title": "Audio",
			"srcImage": "/images/products/6.jpg",
			"slug": "audio",
			"id": 4
		},
		{
			"title": "Balanzas",
			"srcImage": "/images/products/5.jpg",
			"slug": "balanzas",
			"id": 5
		},
		{
			"title": "Cables",
			"srcImage": "/images/products/7.jpg",
			"slug": "cables",
			"id": 6
		},
		{
			"title": "Calibrador",
			"srcImage": "/images/products/8.jpg",
			"slug": "calibrador",
			"id": 7
		},
		{
			"title": "Camaras",
			"srcImage": "/images/products/9.jpg",
			"slug": "camaras",
			"id": 8
		},
		{
			"title": "Cargadores",
			"srcImage": "/images/products/1.jpg",
			"slug": "cargadores",
			"id": 9
		},
		{
			"title": "Convertidores",
			"srcImage": "/images/products/9.jpg",
			"slug": "convertidores",
			"id": 10
		},
		{
			"title": "Destornilladores",
			"srcImage": "/images/products/3.jpg",
			"slug": "destornilladores",
			"id": 11
		},
		{
			"title": "MDVR",
			"srcImage": "/images/products/6.jpg",
			"slug": "mdvr",
			"id": 12
		},
		{
			"title": "Modem",
			"srcImage": "/images/products/3.jpg",
			"slug": "modem",
			"id": 13
		},
		{
			"title": "Modulos",
			"srcImage": "/images/products/7.jpg",
			"slug": "modulos",
			"id": 14
		},
		{
			"title": "Módulos",
			"srcImage": "/images/products/7.jpg",
			"slug": "mdulos",
			"id": 15
		},
		{
			"title": "Multimetro",
			"srcImage": "/images/products/9.jpg",
			"slug": "multimetro",
			"id": 16
		},
		{
			"title": "Pantallas",
			"srcImage": "/images/products/8.jpg",
			"slug": "pantallas",
			"id": 17
		},
		{
			"title": "Parlante",
			"srcImage": "/images/products/10.jpg",
			"slug": "parlante",
			"id": 18
		},
		{
			"title": "Presentador",
			"srcImage": "/images/products/1.jpg",
			"slug": "presentador",
			"id": 19
		},
		{
			"title": "Relojes",
			"srcImage": "/images/products/2.jpg",
			"slug": "relojes",
			"id": 20
		},
		{
			"title": "Seguridad",
			"srcImage": "/images/products/5.jpg",
			"slug": "seguridad",
			"id": 21
		},
		{
			"title": "Selladora",
			"srcImage": "/images/products/4.jpg",
			"slug": "selladora",
			"id": 22
		},
		{
			"title": "Sensores",
			"srcImage": "/images/products/5.jpg",
			"slug": "sensores",
			"id": 23
		},
		{
			"title": "Termómetro",
			"srcImage": "/images/products/8.jpg",
			"slug": "termmetro",
			"id": 24
		},
		{
			"title": "Otros",
			"srcImage": "/images/products/3.jpg",
			"slug": "otros",
			"id": 25
		},
		{
			"title": "Video",
			"srcImage": "/images/products/10.jpg",
			"slug": "video",
			"id": 26
		}
	])
}