export const rbac = (roles: string[]) => (req: any, res: any, next: any) => {
    const userRole = req.user?.role;
    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
  