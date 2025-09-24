"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Play, Upload, Download, Mic, Video, BookOpen, Zap, Brain, Award } from "lucide-react";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [learningContent, setLearningContent] = useState("");
  const [videoLength, setVideoLength] = useState("5");
  const [voiceStyle, setVoiceStyle] = useState("education");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const popularTopics = [
    "Kesehatan dan Nutrisi",
    "Vaksinasi COVID-19",
    "Kesehatan Mental",
    "Gaya Hidup Sehat",
    "Pencegahan Penyakit",
    "Edukasi Medis"
  ];

  const handleGenerate = async () => {
    if (!learningContent.trim()) {
      toast.error("Silakan masukkan materi pembelajaran terlebih dahulu!");
      return;
    }

    setIsGenerating(true);
    setProgress(0);

    // Simulate video generation process
    const steps = [
      { step: 1, message: "Menganalisis materi pembelajaran...", progress: 20 },
      { step: 2, message: "Membuat script dengan gaya Dr. Tirta...", progress: 40 },
      { step: 3, message: "Generating voice dengan AI Dr. Tirta...", progress: 60 },
      { step: 4, message: "Membuat visual dan animasi...", progress: 80 },
      { step: 5, message: "Menggabungkan audio dan video...", progress: 100 }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setProgress(step.progress);
      toast.info(step.message);
    }

    // Mock generated video URL
    setGeneratedVideo("/api/generated-video/sample.mp4");
    setIsGenerating(false);
    toast.success("Video berhasil dibuat dengan voiceover Dr. Tirta!");
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    // Auto-fill content based on topic
    const topicTemplates: Record<string, string> = {
      "Kesehatan dan Nutrisi": "Pelajari pentingnya nutrisi seimbang untuk kesehatan optimal. Dr. Tirta akan menjelaskan nutrisi makro dan mikro yang dibutuhkan tubuh...",
      "Vaksinasi COVID-19": "Memahami pentingnya vaksinasi COVID-19 dalam mencegah penyebaran virus. Dr. Tirta akan membahas efektivitas dan keamanan vaksin...",
      "Kesehatan Mental": "Kesehatan mental sama pentingnya dengan kesehatan fisik. Dr. Tirta akan membahas cara menjaga kesehatan mental di era modern...",
    };
    setLearningContent(topicTemplates[topic] || `Materi pembelajaran tentang ${topic} yang akan dijelaskan oleh Dr. Tirta...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr. Tirta AI Video Generator</h1>
                <p className="text-sm text-gray-600">Powered by AI Voice Cloning Technology</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Zap className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 p-1 rounded-full">
                <Award className="h-4 w-4" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Generate Video AI dengan Suara
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Dr. Tirta</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Buat video edukasi dengan AI menggunakan voice cloning Dr. Tirta Mandira Hudhi.
            Input materi pembelajaran Anda dan dapatkan video berkualitas tinggi dengan penjelasan yang mudah dipahami.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="generate" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="generate" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Generate Video
                </TabsTrigger>
                <TabsTrigger value="voice" className="flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  Voice Training
                </TabsTrigger>
                <TabsTrigger value="library" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Video Library
                </TabsTrigger>
              </TabsList>

              <TabsContent value="generate" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5" />
                      Buat Video Pembelajaran
                    </CardTitle>
                    <CardDescription>
                      Masukkan materi yang ingin Anda pelajari, dan AI akan membuat video dengan voiceover Dr. Tirta
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Popular Topics */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">Topik Populer</label>
                      <div className="flex flex-wrap gap-2">
                        {popularTopics.map((topic) => (
                          <Badge
                            key={topic}
                            variant={selectedTopic === topic ? "default" : "outline"}
                            className="cursor-pointer hover:bg-blue-50"
                            onClick={() => handleTopicSelect(topic)}
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Learning Content Input */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Materi Pembelajaran</label>
                      <Textarea
                        placeholder="Jelaskan materi yang ingin Anda pelajari. Contoh: 'Saya ingin belajar tentang pentingnya vaksinasi COVID-19, efek samping yang mungkin terjadi, dan bagaimana cara kerja vaksin dalam tubuh...'"
                        value={learningContent}
                        onChange={(e) => setLearningContent(e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>

                    {/* Video Settings */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Durasi Video</label>
                        <Select value={videoLength} onValueChange={setVideoLength}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 menit</SelectItem>
                            <SelectItem value="5">5 menit</SelectItem>
                            <SelectItem value="10">10 menit</SelectItem>
                            <SelectItem value="15">15 menit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Gaya Penyampaian</label>
                        <Select value={voiceStyle} onValueChange={setVoiceStyle}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="education">Edukatif</SelectItem>
                            <SelectItem value="casual">Santai</SelectItem>
                            <SelectItem value="professional">Profesional</SelectItem>
                            <SelectItem value="motivational">Motivasional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Generate Button */}
                    <Button
                      onClick={handleGenerate}
                      disabled={isGenerating || !learningContent.trim()}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                      size="lg"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Generating Video...
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Generate Video dengan Suara Dr. Tirta
                        </>
                      )}
                    </Button>

                    {/* Progress */}
                    {isGenerating && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="w-full" />
                      </div>
                    )}

                    {/* Generated Video */}
                    {generatedVideo && (
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="pt-6">
                          <div className="text-center space-y-4">
                            <div className="bg-green-100 p-4 rounded-lg">
                              <Video className="h-12 w-12 text-green-600 mx-auto mb-2" />
                              <h3 className="font-semibold text-green-800">Video Berhasil Dibuat!</h3>
                              <p className="text-green-600 text-sm">Video dengan voiceover Dr. Tirta siap digunakan</p>
                            </div>
                            <div className="flex gap-2 justify-center">
                              <Button variant="outline" size="sm">
                                <Play className="h-4 w-4 mr-2" />
                                Preview
                              </Button>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="voice" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mic className="h-5 w-5" />
                      Voice Training & Audio Extract
                    </CardTitle>
                    <CardDescription>
                      Upload audio Dr. Tirta untuk training model atau extract audio dari video existing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Upload Audio for Training */}
                      <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors">
                        <CardContent className="pt-6">
                          <div className="text-center space-y-4">
                            <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                            <div>
                              <h3 className="font-semibold">Upload Audio Training</h3>
                              <p className="text-sm text-gray-600">Upload file audio Dr. Tirta (.mp3, .wav)</p>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">
                                  <Upload className="h-4 w-4 mr-2" />
                                  Pilih File Audio
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Upload Audio untuk Training</DialogTitle>
                                  <DialogDescription>
                                    Silakan upload file audio Dr. Tirta dengan kualitas tinggi untuk meningkatkan akurasi voice cloning.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <Input type="file" accept="audio/*" />
                                  <div className="text-sm text-gray-600">
                                    <p>• Format yang didukung: MP3, WAV, FLAC</p>
                                    <p>• Durasi minimal: 5 menit</p>
                                    <p>• Kualitas audio: 44.1kHz atau lebih tinggi</p>
                                  </div>
                                  <Button className="w-full">Upload & Start Training</Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Extract Audio from Video */}
                      <Card className="border-dashed border-2 border-gray-300 hover:border-green-400 transition-colors">
                        <CardContent className="pt-6">
                          <div className="text-center space-y-4">
                            <Video className="h-12 w-12 text-gray-400 mx-auto" />
                            <div>
                              <h3 className="font-semibold">Extract dari Video</h3>
                              <p className="text-sm text-gray-600">Extract audio dari video Dr. Tirta existing</p>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">
                                  <Video className="h-4 w-4 mr-2" />
                                  Upload Video
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Extract Audio dari Video</DialogTitle>
                                  <DialogDescription>
                                    Upload video yang berisi suara Dr. Tirta untuk di-extract audionya.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <Input type="file" accept="video/*" />
                                  <div className="text-sm text-gray-600">
                                    <p>• Format yang didukung: MP4, MOV, AVI</p>
                                    <p>• Ukuran maksimal: 500MB</p>
                                    <p>• Audio akan di-extract otomatis</p>
                                  </div>
                                  <Button className="w-full">Extract Audio</Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Current Voice Model Status */}
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-blue-800">Status Voice Model</h4>
                            <p className="text-blue-600 text-sm">Model Dr. Tirta saat ini: Pre-trained v2.1</p>
                          </div>
                          <Badge className="bg-blue-600">Active</Badge>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Akurasi Voice</span>
                            <span>87%</span>
                          </div>
                          <Progress value={87} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="library" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Video Library
                    </CardTitle>
                    <CardDescription>
                      Koleksi video yang telah dibuat dengan AI Dr. Tirta
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Vaksinasi COVID-19", duration: "8:30", topic: "Kesehatan" },
                        { title: "Nutrisi Seimbang", duration: "5:45", topic: "Gizi" },
                        { title: "Kesehatan Mental", duration: "12:15", topic: "Psikologi" },
                        { title: "Olahraga dan Imunitas", duration: "6:20", topic: "Fitness" }
                      ].map((video, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="pt-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm">{video.title}</h4>
                                <p className="text-xs text-gray-600 mt-1">{video.duration}</p>
                                <Badge variant="secondary" className="mt-2 text-xs">{video.topic}</Badge>
                              </div>
                              <div className="flex gap-1">
                                <Button size="sm" variant="ghost">
                                  <Play className="h-3 w-3" />
                                </Button>
                                <Button size="sm" variant="ghost">
                                  <Download className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fitur Unggulan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">AI Voice Cloning</h4>
                    <p className="text-xs text-gray-600">Teknologi canggih untuk cloning suara Dr. Tirta</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Auto Video Generation</h4>
                    <p className="text-xs text-gray-600">Generate video otomatis dengan visual menarik</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Cepat & Efisien</h4>
                    <p className="text-xs text-gray-600">Hasil video dalam hitungan menit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-800">💡 Tips Penggunaan</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-yellow-700 space-y-2">
                <p>• Gunakan materi yang jelas dan terstruktur</p>
                <p>• Semakin detail input, semakin baik hasilnya</p>
                <p>• Upload audio berkualitas tinggi untuk training</p>
                <p>• Pilih durasi sesuai kompleksitas materi</p>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistik</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Video Generated</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Views</span>
                  <span className="font-semibold">45.2K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Users</span>
                  <span className="font-semibold">892</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
