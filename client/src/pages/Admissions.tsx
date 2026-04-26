import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Book, User, GraduationCap, Upload, CheckCircle2, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Admissions() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formSchema = z.object({
    fullName: z.string().min(2, "Nome é obrigatório"),
    birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
    idNumber: z.string()
      .regex(/^\d{9}LA\d{3}$/, t('admissionsPage.form.validation.idNumberFormat') || "Formato inválido. Use: 000000000LA000"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(9, "Telefone inválido"),
    previousSchool: z.string().min(2, "Escola é obrigatória"),
    averageGrade: z.string()
      .min(1, t('admissionsPage.form.validation.averageGradeRequired') || "Média é obrigatória")
      .refine((val) => {
        const num = parseFloat(val);
        return !isNaN(num) && num >= 0 && num <= 20;
      }, t('admissionsPage.form.validation.averageGradeMax') || "A média deve estar entre 0 e 20"),
    course: z.string().min(1, "Curso é obrigatório"),
    identityDoc: z.custom<FileList>((val) => {
      return val instanceof FileList && val.length > 0;
    }, { message: t('admissionsPage.form.validation.identityDoc') || "Cópia do BI é obrigatória" }),
    certificateDoc: z.custom<FileList>((val) => {
      return val instanceof FileList && val.length > 0;
    }, { message: t('admissionsPage.form.validation.certificateDoc') || "Certificado é obrigatório" }),
    gradesDoc: z.custom<FileList>((val) => {
      return val instanceof FileList && val.length > 0;
    }, { message: t('admissionsPage.form.validation.gradesDoc') || "Notas são obrigatórias" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      birthDate: '',
      idNumber: '',
      email: '',
      phone: '',
      previousSchool: '',
      averageGrade: '',
      course: '',
      identityDoc: undefined,
      certificateDoc: undefined,
      gradesDoc: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const nextStep = async () => {
    const fields = step === 1 
      ? ['fullName', 'birthDate', 'idNumber', 'email', 'phone'] as const
      : ['previousSchool', 'averageGrade', 'course'] as const;
    
    const isValid = await form.trigger(fields);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const requirements = [
    { icon: FileText, text: t('admissionsPage.requirements.doc1') },
    { icon: FileText, text: t('admissionsPage.requirements.doc2') },
    { icon: FileText, text: t('admissionsPage.requirements.doc3') },
    { icon: Book, text: t('admissionsPage.requirements.academic1') },
  ];

  const processSteps = [
    {
      step: t('admissionsPage.process.step1.title'),
      description: t('admissionsPage.process.step1.desc'),
    },
    {
      step: t('admissionsPage.process.step2.title'),
      description: t('admissionsPage.process.step2.desc'),
    },
    {
      step: t('admissionsPage.process.step3.title'),
      description: t('admissionsPage.process.step3.desc'),
    },
    {
      step: t('admissionsPage.process.step4.title'),
      description: t('admissionsPage.process.step4.desc'),
    },
  ];

  const faqs = [
    {
      question: t('admissionsPage.faq.q1'),
      answer: t('admissionsPage.faq.a1'),
    },
    {
      question: t('admissionsPage.faq.q2'),
      answer: t('admissionsPage.faq.a2'),
    },
    {
      question: t('admissionsPage.faq.q3'),
      answer: t('admissionsPage.faq.a3'),
    },
    {
      question: t('admissionsPage.faq.q4'),
      answer: t('admissionsPage.faq.a4'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {t('admissionsPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('admissionsPage.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">{t('admissionsPage.requirements.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center p-4">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <req.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{req.text}</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-16">{t('admissionsPage.process.title')}</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              {processSteps.map((item, index) => (
                <div key={index} className="relative pl-10 md:pl-0 mb-12 last:mb-0">
                  <div className="md:flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                    <div className="md:w-1/2"></div>
                    <div className="absolute top-1/2 left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full text-primary-foreground flex items-center justify-center font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="w-full md:w-1/2 md:px-8">
                      <Card className="hover-elevate">
                        <CardHeader>
                          <CardTitle>{item.step}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simulation Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('admissionsPage.simulation.title')}</h2>
              <p className="text-muted-foreground">{t('admissionsPage.simulation.subtitle')}</p>
            </div>

            <Card className="border-2 border-border/50 shadow-xl">
              <CardContent className="p-6 sm:p-10">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{t('admissionsPage.form.success.title')}</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">{t('admissionsPage.form.success.desc')}</p>
                    <Button className="mt-8" onClick={() => { setIsSuccess(false); setStep(1); form.reset(); }}>
                      Nova Simulação
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      {/* Progress Steps */}
                      <div className="flex justify-between mb-8 relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10" />
                        {[1, 2, 3].map((s) => (
                          <div key={s} className={`flex flex-col items-center gap-2 bg-card px-2 ${step >= s ? 'text-primary' : 'text-muted-foreground'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold transition-colors ${step >= s ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground bg-card'}`}>
                              {s}
                            </div>
                            <span className="text-xs font-medium hidden sm:block">
                              {s === 1 ? t('admissionsPage.form.personal.title') : s === 2 ? t('admissionsPage.form.academic.title') : t('admissionsPage.form.documents.title')}
                            </span>
                          </div>
                        ))}
                      </div>

                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField control={form.control} name="fullName" render={({ field }) => (
                                <FormItem><FormLabel>{t('admissionsPage.form.fullName')}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="birthDate" render={({ field }) => (
                                <FormItem><FormLabel>{t('admissionsPage.form.birthDate')}</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="idNumber" render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('admissionsPage.form.idNumber')}</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field}
                                      onChange={(e) => {
                                        let value = e.target.value.toUpperCase().replace(/[^0-9LA]/g, '');
                                        // Garantir que "LA" aparece apenas uma vez e na posição correta
                                        if (value.length > 9 && !value.includes('LA')) {
                                          value = value.slice(0, 9) + 'LA' + value.slice(9);
                                        }
                                        // Limitar a 14 caracteres (9 dígitos + LA + 3 dígitos)
                                        if (value.length > 14) {
                                          value = value.slice(0, 14);
                                        }
                                        field.onChange(value);
                                      }}
                                      placeholder="000000000LA000"
                                      maxLength={14}
                                    />
                                  </FormControl>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {t('admissionsPage.form.idNumberHint') || 'Formato: 9 dígitos + LA + 3 dígitos'}
                                  </p>
                                  <FormMessage />
                                </FormItem>
                              )} />
                              <FormField control={form.control} name="phone" render={({ field }) => (
                                <FormItem><FormLabel>{t('admissionsPage.form.phone')}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem className="md:col-span-2"><FormLabel>{t('admissionsPage.form.email')}</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                            </div>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField control={form.control} name="previousSchool" render={({ field }) => (
                                <FormItem><FormLabel>{t('admissionsPage.form.previousSchool')}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="averageGrade" render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('admissionsPage.form.averageGrade')}</FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="number" 
                                      min="0" 
                                      max="20" 
                                      step="0.1"
                                      {...field}
                                      onChange={(e) => {
                                        const value = e.target.value;
                                        // Permitir apenas números e um ponto decimal
                                        if (value === '' || /^\d*\.?\d*$/.test(value)) {
                                          const num = parseFloat(value);
                                          // Se o valor for maior que 20, não atualizar
                                          if (value === '' || (!isNaN(num) && num <= 20)) {
                                            field.onChange(value);
                                          }
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )} />
                              <FormField control={form.control} name="course" render={({ field }) => (
                                <FormItem className="md:col-span-2">
                                  <FormLabel>{t('admissionsPage.form.course')}</FormLabel>
                                  <FormControl>
                                    <select 
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                      {...field}
                                    >
                                      <option value="">{t('admissionsPage.form.selectCourse') || 'Selecione um curso...'}</option>
                                      <option value="ti">{t('courses.ti.title') || 'Técnico de Informática'}</option>
                                      <option value="gsi">{t('courses.gsi.title') || 'Gestão de Sistemas Informáticos'}</option>
                                      <option value="eie">{t('courses.eie.title') || 'Energias e Instalações Elétricas'}</option>
                                      <option value="tocc">{t('courses.tocc.title') || 'Construção Civil'}</option>
                                      <option value="fc">{t('courses.fc.title') || 'Frio e Climatização'}</option>
                                      <option value="dp">{t('courses.dp.title') || 'Desenhador Projectista'}</option>
                                      <option value="tim">{t('courses.tim.title') || 'Tecnologia de Imóveis'}</option>
                                      <option value="ttm">{t('courses.ttm.title') || 'Tecnologias Móveis'}</option>
                                    </select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )} />
                            </div>
                          </motion.div>
                        )}

                        {step === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                          >
                            <FormField
                              control={form.control}
                              name="identityDoc"
                              render={({ field: { value, onChange, ...field } }) => (
                                <FormItem>
                                  <FormLabel>{t('admissionsPage.form.uploadID')} <span className="text-destructive">*</span></FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="file" 
                                      accept=".pdf,.jpg,.jpeg,.png"
                                      onChange={(e) => {
                                        const files = e.target.files;
                                        if (files && files.length > 0) {
                                          onChange(files);
                                        } else {
                                          onChange(undefined);
                                        }
                                      }} 
                                      value={undefined}
                                      required
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="certificateDoc"
                              render={({ field: { value, onChange, ...field } }) => (
                                <FormItem>
                                  <FormLabel>{t('admissionsPage.form.uploadCertificate')} <span className="text-destructive">*</span></FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="file" 
                                      accept=".pdf,.jpg,.jpeg,.png"
                                      onChange={(e) => {
                                        const files = e.target.files;
                                        if (files && files.length > 0) {
                                          onChange(files);
                                        } else {
                                          onChange(undefined);
                                        }
                                      }} 
                                      value={undefined}
                                      required
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="gradesDoc"
                              render={({ field: { value, onChange, ...field } }) => (
                                <FormItem>
                                  <FormLabel>{t('admissionsPage.form.uploadGrades')} <span className="text-destructive">*</span></FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="file" 
                                      accept=".pdf,.jpg,.jpeg,.png"
                                      onChange={(e) => {
                                        const files = e.target.files;
                                        if (files && files.length > 0) {
                                          onChange(files);
                                        } else {
                                          onChange(undefined);
                                        }
                                      }} 
                                      value={undefined}
                                      required
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex justify-between pt-4">
                        {step > 1 && (
                          <Button type="button" variant="outline" onClick={prevStep}>
                            {t('admissionsPage.form.prev')}
                          </Button>
                        )}
                        {step < 3 ? (
                          <Button type="button" className="ml-auto" onClick={nextStep}>
                            {t('admissionsPage.form.next')}
                          </Button>
                        ) : (
                          <Button 
                            type="submit" 
                            className="ml-auto" 
                            disabled={isSubmitting}
                            onClick={async (e) => {
                              e.preventDefault();
                              // Validar todos os campos, incluindo documentos
                              const isValid = await form.trigger();
                              if (isValid) {
                                form.handleSubmit(onSubmit)();
                              }
                            }}
                          >
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {t('admissionsPage.form.submit')}
                          </Button>
                        )}
                      </div>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">{t('admissionsPage.faq.title')}</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}