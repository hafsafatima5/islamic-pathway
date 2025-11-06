import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Phone, MapPin, BookOpen, Calendar, Download, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  message: string;
  date: string;
  status: string;
}

const Admin = () => {
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    loadRegistrations();
  }, []);

  const loadRegistrations = () => {
    const data = JSON.parse(localStorage.getItem("registrations") || "[]");
    setRegistrations(data.sort((a: Registration, b: Registration) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ));
  };

  const handleStatusUpdate = (id: string, newStatus: string) => {
    const updated = registrations.map((reg) =>
      reg.id === id ? { ...reg, status: newStatus } : reg
    );
    localStorage.setItem("registrations", JSON.stringify(updated));
    setRegistrations(updated);
    toast({
      title: "Status Updated",
      description: `Registration marked as ${newStatus}`,
    });
  };

  const exportData = () => {
    const dataStr = JSON.stringify(registrations, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `registrations-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    toast({
      title: "Export Successful",
      description: "Registration data has been downloaded",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage student registrations and course enrollments
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={loadRegistrations}
                className="border-primary text-primary hover:bg-primary/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button
                onClick={exportData}
                className="bg-gradient-islamic hover:opacity-90"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Registrations</CardDescription>
              <CardTitle className="text-3xl text-primary">
                {registrations.length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pending</CardDescription>
              <CardTitle className="text-3xl text-secondary">
                {registrations.filter((r) => r.status === "pending").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Contacted</CardDescription>
              <CardTitle className="text-3xl text-primary-light">
                {registrations.filter((r) => r.status === "contacted").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Enrolled</CardDescription>
              <CardTitle className="text-3xl text-accent">
                {registrations.filter((r) => r.status === "enrolled").length}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Registrations Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Student Registrations</CardTitle>
            <CardDescription>
              View and manage all student registration submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {registrations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No registrations yet. They will appear here once students submit the registration form.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Student Info</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {formatDate(reg.date)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{reg.fullName}</div>
                            {reg.country && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                <MapPin className="w-3 h-3" />
                                {reg.country}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="w-3 h-3 text-primary" />
                              <a
                                href={`mailto:${reg.email}`}
                                className="text-primary hover:underline"
                              >
                                {reg.email}
                              </a>
                            </div>
                            {reg.phone && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="w-3 h-3" />
                                {reg.phone}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="font-medium">{reg.course}</span>
                          </div>
                          {reg.message && (
                            <p className="text-sm text-muted-foreground mt-1 max-w-xs truncate">
                              {reg.message}
                            </p>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              reg.status === "enrolled"
                                ? "default"
                                : reg.status === "contacted"
                                ? "secondary"
                                : "outline"
                            }
                            className={
                              reg.status === "enrolled"
                                ? "bg-primary"
                                : reg.status === "contacted"
                                ? "bg-secondary text-secondary-foreground"
                                : ""
                            }
                          >
                            {reg.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {reg.status === "pending" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleStatusUpdate(reg.id, "contacted")}
                              >
                                Mark Contacted
                              </Button>
                            )}
                            {reg.status === "contacted" && (
                              <Button
                                size="sm"
                                className="bg-gradient-islamic"
                                onClick={() => handleStatusUpdate(reg.id, "enrolled")}
                              >
                                Mark Enrolled
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
