import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Heart, Brain, BookOpen, MessageSquare, Plus, ThumbsUp, 
  Users, Timer, Target, Wind, PenLine 
} from 'lucide-react';

const WellnessApp = () => {
  const [moodData] = useState([
    { date: 'Mon', mood: 7, anxiety: 4, sleep: 8 },
    { date: 'Tue', mood: 6, anxiety: 5, sleep: 7 },
    { date: 'Wed', mood: 8, anxiety: 3, sleep: 8 },
    { date: 'Thu', mood: 7, anxiety: 4, sleep: 6 },
    { date: 'Fri', mood: 9, anxiety: 2, sleep: 9 },
  ]);

  const [journalPrompts] = useState([
    "How are you feeling right now? What led to these feelings?",
    "What's one thing you're grateful for today?",
    "What's a challenge you faced today and how did you handle it?",
    "What's something that made you smile today?"
  ]);

  const [goals] = useState([
    { id: 1, title: "Meditate Daily", progress: 70, target: "10 minutes daily" },
    { id: 2, title: "Journal Entries", progress: 40, target: "3 times per week" },
    { id: 3, title: "Mindful Walking", progress: 85, target: "15 minutes daily" }
  ]);

  const [forumPosts] = useState([
    {
      id: 1,
      user: "MindfulMary",
      title: "Tips for Morning Meditation",
      replies: 12,
      likes: 24
    },
    {
      id: 2,
      user: "ZenMaster",
      title: "Dealing with Work Stress",
      replies: 18,
      likes: 32
    }
  ]);

  const [breathingExercise, setBreathingExercise] = useState({
    isActive: false,
    phase: 'inhale',
    seconds: 4
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-800">MindfulMe</h1>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus className="mr-2 h-4 w-4" />
            New Entry
          </Button>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList className="bg-white">
            <TabsTrigger value="dashboard">
              <Brain className="mr-2 h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="breathe">
              <Wind className="mr-2 h-4 w-4" />
              Breathe
            </TabsTrigger>
            <TabsTrigger value="journal">
              <PenLine className="mr-2 h-4 w-4" />
              Journal
            </TabsTrigger>
            <TabsTrigger value="goals">
              <Target className="mr-2 h-4 w-4" />
              Goals
            </TabsTrigger>
            <TabsTrigger value="community">
              <Users className="mr-2 h-4 w-4" />
              Community
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-4">
            {/* Original Dashboard Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-red-500" />
                  Mood Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={moodData}>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="mood" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="anxiety" stroke="#ef4444" strokeWidth={2} />
                      <Line type="monotone" dataKey="sleep" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Breathing Exercise Tab */}
          <TabsContent value="breathe" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wind className="mr-2 h-5 w-5 text-blue-500" />
                  Guided Breathing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-6">
                  <div className={`transition-all duration-1000 transform ${
                    breathingExercise.phase === 'inhale' ? 'scale-110' : 'scale-100'
                  }`}>
                    <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                      <Wind className={`h-16 w-16 text-blue-500 transition-transform duration-1000 ${
                        breathingExercise.phase === 'inhale' ? 'scale-110' : 'scale-90'
                      }`} />
                    </div>
                  </div>
                  <div className="text-xl font-medium">
                    {breathingExercise.isActive ? breathingExercise.phase : 'Ready to begin'}
                  </div>
                  <Button 
                    className="bg-blue-500 hover:bg-blue-600"
                    onClick={() => setBreathingExercise(prev => ({ ...prev, isActive: !prev.isActive }))}
                  >
                    {breathingExercise.isActive ? 'Stop' : 'Start'} Exercise
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Journaling Tab */}
          <TabsContent value="journal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PenLine className="mr-2 h-5 w-5 text-purple-500" />
                  Today's Journal Prompt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">{journalPrompts[0]}</p>
                <textarea 
                  className="w-full p-4 border rounded-lg h-32"
                  placeholder="Start writing here..."
                />
                <Button className="mt-4 bg-purple-500 hover:bg-purple-600">
                  Save Entry
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-green-500" />
                  Goal Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {goals.map(goal => (
                    <div key={goal.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{goal.title}</span>
                        <span className="text-gray-500">{goal.target}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <Button className="bg-green-500 hover:bg-green-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Goal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-indigo-500" />
                  Community Forum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {forumPosts.map(post => (
                    <div key={post.id} className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium text-lg mb-2">{post.title}</h3>
                      <div className="text-sm text-gray-500">Posted by {post.user}</div>
                      <div className="flex items-center space-x-4 mt-2 text-sm">
                        <span className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.replies} replies
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {post.likes} likes
                        </span>
                      </div>
                    </div>
                  ))}
                  <Button className="bg-indigo-500 hover:bg-indigo-600">
                    <Plus className="mr-2 h-4 w-4" />
                    New Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WellnessApp;