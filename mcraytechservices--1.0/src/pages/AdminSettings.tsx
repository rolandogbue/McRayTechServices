import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Save,
  UserPlus,
  Trash2,
  Shield,
  Users,
  Settings,
  Key,
  Mail,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ManagedUser {
  id: string;
  email: string | null;
  full_name: string | null;
  created_at: string;
  roles: string[];
}

const AdminSettings = () => {
  const { user, isAdmin, loading: authLoading, session } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Account settings
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);

  // User management
  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteName, setInviteName] = useState("");
  const [invitePassword, setInvitePassword] = useState("");
  const [inviteRole, setInviteRole] = useState<"moderator" | "admin">(
    "moderator",
  );
  const [inviting, setInviting] = useState(false);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/login");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (isAdmin && session) {
      setNewEmail(user?.email || "");
      fetchUsers();
    }
  }, [isAdmin, session]);

  const callManageUsers = async (body: Record<string, unknown>) => {
    const { data, error } = await supabase.functions.invoke("manage-users", {
      body,
    });
    if (error) {
      // Try to extract the actual error message from the response
      let message = error.message;
      try {
        if (error.context && typeof error.context.json === "function") {
          const errBody = await error.context.json();
          if (errBody?.error) message = errBody.error;
        }
      } catch {}
      throw new Error(message);
    }
    if (data?.error) throw new Error(data.error);
    return data;
  };

  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const data = await callManageUsers({ action: "list_users" });
      setUsers(data.users || []);
    } catch (err: any) {
      toast({
        title: "Error loading users",
        description: err.message,
        variant: "destructive",
      });
    }
    setLoadingUsers(false);
  };

  const handleUpdateEmail = async () => {
    if (!newEmail.trim()) return;
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        email: newEmail.trim(),
      });
      if (error) throw error;
      toast({ title: "Email updated successfully" });
    } catch (err: any) {
      toast({
        title: "Error updating email",
        description: err.message,
        variant: "destructive",
      });
    }
    setSaving(false);
  };

  const handleUpdatePassword = async () => {
    if (newPassword.length < 6) {
      toast({
        title: "Password must be at least 6 characters",
        variant: "destructive",
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: "Passwords do not match", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) throw error;
      toast({ title: "Password updated successfully" });
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      toast({
        title: "Error updating password",
        description: err.message,
        variant: "destructive",
      });
    }
    setSaving(false);
  };

  const handleInviteUser = async () => {
    if (!inviteEmail.trim() || !invitePassword.trim()) {
      toast({
        title: "Email and password are required",
        variant: "destructive",
      });
      return;
    }
    setInviting(true);
    try {
      await callManageUsers({
        action: "create_user",
        email: inviteEmail.trim(),
        password: invitePassword.trim(),
        full_name: inviteName.trim() || inviteEmail.trim(),
        role: inviteRole,
      });
      toast({
        title: `${inviteRole === "admin" ? "Admin" : "Content manager"} added successfully`,
      });
      setInviteEmail("");
      setInviteName("");
      setInvitePassword("");
      fetchUsers();
    } catch (err: any) {
      toast({
        title: "Error adding user",
        description: err.message,
        variant: "destructive",
      });
    }
    setInviting(false);
  };

  const handleRemoveRole = async (userId: string, role: string) => {
    try {
      await callManageUsers({ action: "remove_role", user_id: userId, role });
      toast({ title: "Role removed" });
      fetchUsers();
    } catch (err: any) {
      toast({
        title: "Error removing role",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await callManageUsers({ action: "delete_user", user_id: userId });
      toast({ title: "User deleted" });
      fetchUsers();
    } catch (err: any) {
      toast({
        title: "Error deleting user",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/admin/blog")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Admin Settings
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your account and team
              </p>
            </div>
          </div>

          <Tabs defaultValue="account" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account" className="gap-2">
                <Settings className="w-4 h-4" /> Account
              </TabsTrigger>
              <TabsTrigger value="team" className="gap-2">
                <Users className="w-4 h-4" /> Team
              </TabsTrigger>
            </TabsList>

            {/* Account Tab */}
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="w-5 h-5" /> Update Email
                  </CardTitle>
                  <CardDescription>
                    Change your admin login email address
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="new@email.com"
                  />
                  <Button onClick={handleUpdateEmail} disabled={saving}>
                    <Save className="w-4 h-4 mr-2" /> Update Email
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Key className="w-5 h-5" /> Change Password
                  </CardTitle>
                  <CardDescription>
                    Set a new password for your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password"
                  />
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                  />
                  <Button onClick={handleUpdatePassword} disabled={saving}>
                    <Save className="w-4 h-4 mr-2" /> Update Password
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <UserPlus className="w-5 h-5" /> Add Team Member
                  </CardTitle>
                  <CardDescription>
                    Add a content manager or admin to help manage the blog
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      value={inviteName}
                      onChange={(e) => setInviteName(e.target.value)}
                      placeholder="Full name"
                    />
                    <Input
                      type="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      placeholder="Email address"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="password"
                      value={invitePassword}
                      onChange={(e) => setInvitePassword(e.target.value)}
                      placeholder="Temporary password"
                    />
                    <select
                      value={inviteRole}
                      onChange={(e) =>
                        setInviteRole(e.target.value as "moderator" | "admin")
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="moderator">Content Manager</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <Button onClick={handleInviteUser} disabled={inviting}>
                    <UserPlus className="w-4 h-4 mr-2" />
                    {inviting ? "Adding..." : "Add Team Member"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5" /> Team Members
                  </CardTitle>
                  <CardDescription>
                    {loadingUsers
                      ? "Loading..."
                      : `${users.length} team member(s)`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {users.length === 0 && !loadingUsers ? (
                    <p className="text-muted-foreground text-center py-8">
                      No team members yet
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {users.map((u) => (
                        <div
                          key={u.id}
                          className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30"
                        >
                          <div className="min-w-0">
                            <p className="font-medium text-foreground truncate">
                              {u.full_name || u.email}
                            </p>
                            <p className="text-sm text-muted-foreground truncate">
                              {u.email}
                            </p>
                            <div className="flex gap-1.5 mt-1.5">
                              {u.roles.map((r) => (
                                <Badge
                                  key={r}
                                  variant={
                                    r === "admin" ? "default" : "secondary"
                                  }
                                  className="text-xs"
                                >
                                  <Shield className="w-3 h-3 mr-1" />
                                  {r === "moderator" ? "Content Manager" : r}
                                </Badge>
                              ))}
                              {u.roles.length === 0 && (
                                <Badge variant="outline" className="text-xs">
                                  No role
                                </Badge>
                              )}
                            </div>
                          </div>
                          {u.id !== user?.id && (
                            <div className="flex gap-2 ml-4">
                              {u.roles.includes("moderator") && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    handleRemoveRole(u.id, "moderator")
                                  }
                                >
                                  Remove Role
                                </Button>
                              )}
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-destructive hover:bg-destructive/10"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      Delete this user?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will permanently delete {u.email} and
                                      remove all their access.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDeleteUser(u.id)}
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminSettings;
