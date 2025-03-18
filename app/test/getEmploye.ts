import prisma from "@/lib/db.prisma";

const getUserEmploye = async () =>  {
    const employe = await prisma.employe.findMany({});
    console.log(employe);
    return employe;
};
export default getUserEmploye;