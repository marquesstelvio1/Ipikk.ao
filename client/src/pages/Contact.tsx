    import Navigation from '@/components/Navigation';
    import Footer from '@/components/Footer';
    import { motion, AnimatePresence } from 'framer-motion';
    import { MapPin, Phone, Mail, Clock, Loader2, Maximize2, ExternalLink, X, Navigation2, Sun, Moon } from 'lucide-react';
    import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Button } from '@/components/ui/button';
    import { useLanguage } from '@/contexts/LanguageContext';
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import * as z from 'zod';
    import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
    import { useToast } from "@/hooks/use-toast";
    import { useState, useEffect } from 'react';

    export default function Contact() {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [mapTheme, setMapTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        setIsClient(true);
    }, []);

    const formSchema = z.object({
        name: z.string().min(2, { message: t('contactPage.form.validation.name') }),
        email: z.string()
        .min(1, { message: t('contactPage.form.validation.email.required') })
        .email({ message: t('contactPage.form.validation.email.invalid') }),
        subject: z.string().min(2, { message: t('contactPage.form.validation.subject') }),
        message: z.string().min(10, { message: t('contactPage.form.validation.message') }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: '', email: '', subject: '', message: '' },
    });

    const contactInfo = [
        {
        icon: MapPin,
        title: t('contactPage.info.address'),
        value: t('contactPage.info.address.value'),
        },
        {
        icon: Phone,
        title: t('contactPage.info.phone'),
        value: '+244 933096705',
        },
        {
        icon: Mail,
        title: t('contactPage.info.email'),
        value: 'geral@ipikk.ao',
        },
        {
        icon: Clock,
        title: t('contactPage.info.hours'),
        value: t('contactPage.info.hours.value'),
        },
    ];

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        console.log(values);
        // Simulating an API call
        setTimeout(() => {
        setIsSubmitting(false);
        toast({
            title: t('contactPage.form.toast.success.title'),
            description: t('contactPage.form.toast.success.description'),
        });
        form.reset();
        }, 2000);
        // In a real application, you would send the data to a server here.
        // For example:
        // fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
    }

    return (
        <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
            <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
                >
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                    {t('contactPage.title')}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t('contactPage.subtitle')}
                </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-2"
                >
                    <Card className="h-full border-2 border-border/20 p-4 sm:p-8 hover:border-primary/50 transition-colors duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl">{t('contactPage.form.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>{t('contactPage.form.name')}</FormLabel>
                                    <FormControl><Input placeholder={t('contactPage.form.name.placeholder')} {...field} /></FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>{t('contactPage.form.email')}</FormLabel>
                                    <FormControl><Input type="email" placeholder={t('contactPage.form.email.placeholder')} {...field} /></FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>{t('contactPage.form.subject')}</FormLabel>
                                    <FormControl><Input placeholder={t('contactPage.form.subject.placeholder')} {...field} /></FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>{t('contactPage.form.message')}</FormLabel>
                                    <FormControl><Textarea placeholder={t('contactPage.form.message.placeholder')} className="min-h-[150px]" {...field} /></FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {t('contactPage.form.send')}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                    </Card>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Card className="h-full border-2 border-border/20 p-4 sm:p-8 bg-muted/30 hover:border-primary/50 transition-colors duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl">{t('contactPage.info.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <info.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">{info.title}</h3>
                                <p className="text-muted-foreground">{info.value}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    </CardContent>
                    </Card>
                </motion.div>
                </div>
            </div>
            </section>

            <section className="py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
                >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {t('contactPage.map.title')}
                </h2>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group rounded-lg overflow-hidden border-2 border-border/20 shadow-lg"
                >
                    <div className="h-[400px] w-full">
                        {isClient ? (
                            <MapContainer
                                center={[-8.900563709753747, 13.220600507931326]}
                                zoom={16}
                                style={{ width: '100%', height: '100%' }}
                                attributionControl={true}
                            >
                                <TileLayer
                                    url={mapTheme === 'dark' ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"}
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                />
                                <Marker
                                    position={[-8.900563709753747, 13.220600507931326]}
                                    icon={L.divIcon({
                                        className: 'custom-pin',
                                        html: `
                                          <svg width="36" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">
                                            <path d="M12 0C7 0 3 4 3 9c0 7.5 9 23 9 23s9-15.5 9-23c0-5-4-9-9-9z" fill="${mapTheme === 'dark' ? '#38bdf8' : '#2563eb'}"/>
                                            <circle cx="12" cy="9" r="3" fill="#fff"/>
                                          </svg>
                                        `,
                                        iconSize: [36, 48],
                                        iconAnchor: [18, 48]
                                    })}
                                >
                                    <Popup>
                                        {t('contactPage.map.title')}<br />36XC+M6P, Belas
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        ) : (
                            <div className="flex items-center justify-center w-full h-full bg-muted/20">
                                <span className="text-sm text-muted-foreground">{t('contactPage.map.loading')}</span>
                            </div>
                        )}
                    </div>
                    
                    {/* Map Overlay Controls */}
                    <div className="absolute top-4 right-4 z-[1000] flex flex-col sm:flex-row gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="shadow-md" onClick={() => setMapTheme(prev => prev === 'dark' ? 'light' : 'dark')}>
                            {mapTheme === 'dark' ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                            {mapTheme === 'dark' ? t('contactPage.map.lightMode') : t('contactPage.map.darkMode')}
                        </Button>
                        <Button size="sm" variant="secondary" className="shadow-md" onClick={() => setIsMapOpen(true)}>
                            <Maximize2 className="w-4 h-4 mr-2" />
                            {t('contactPage.map.expand')}
                        </Button>
                        <Button size="sm" variant="default" className="shadow-md" asChild>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=-8.900563709753747,13.220600507931326" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                {t('contactPage.map.directions')}
                            </a>
                        </Button>
                        <Button size="sm" variant="secondary" className="shadow-md" asChild>
                            <a href="waze://?ll=-8.900563709753747,13.220600507931326&navigate=yes" target="_blank" rel="noopener noreferrer">
                                <Navigation2 className="w-4 h-4 mr-2" />
                                {t('contactPage.map.waze')}
                            </a>
                        </Button>
                        <Button size="sm" variant="secondary" className="shadow-md" asChild>
                            <a href="https://www.google.com/maps?q=-8.900563709753747,13.220600507931326" target="_blank" rel="noopener noreferrer">
                                <MapPin className="w-4 h-4 mr-2" />
                                {t('contactPage.map.waypoint')}
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
            </section>
        </main>

        <AnimatePresence>
            {isMapOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
                    onClick={() => setIsMapOpen(false)}
                >
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-full max-w-6xl h-[80vh] bg-background rounded-lg overflow-hidden shadow-2xl" 
                        onClick={e => e.stopPropagation()}
                    >
                        {isClient ? (
                            <MapContainer
                                center={[-8.900563709753747, 13.220600507931326]}
                                zoom={16}
                                style={{ width: '100%', height: '100%' }}
                                attributionControl={true}
                            >
                                <TileLayer
                                    url={mapTheme === 'dark' ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"}
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                />
                                <Marker
                                    position={[-8.900563709753747, 13.220600507931326]}
                                    icon={L.divIcon({
                                        className: 'custom-pin',
                                        html: `
                                          <svg width="36" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">
                                            <path d="M12 0C7 0 3 4 3 9c0 7.5 9 23 9 23s9-15.5 9-23c0-5-4-9-9-9z" fill="${mapTheme === 'dark' ? '#38bdf8' : '#2563eb'}"/>
                                            <circle cx="12" cy="9" r="3" fill="#fff"/>
                                          </svg>
                                        `,
                                        iconSize: [36, 48],
                                        iconAnchor: [18, 48]
                                    })}
                                />
                            </MapContainer>
                        ) : (
                            <div className="flex items-center justify-center w-full h-full bg-black/10">
                                <span className="text-sm text-muted-foreground">{t('contactPage.map.loading')}</span>
                            </div>
                        )}
                        <div className="absolute top-4 left-4 z-[1000]">
                            <Button size="sm" variant="secondary" className="shadow-lg" onClick={() => setMapTheme(prev => prev === 'dark' ? 'light' : 'dark')}>
                                {mapTheme === 'dark' ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                                {mapTheme === 'dark' ? t('contactPage.map.lightMode') : t('contactPage.map.darkMode')}
                            </Button>
                        </div>
                        <Button 
                            size="icon" 
                            variant="secondary" 
                            className="absolute top-4 right-4 shadow-lg hover:bg-destructive hover:text-destructive-foreground" 
                            onClick={() => setIsMapOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        <Footer />
        </div>
    );
    }
