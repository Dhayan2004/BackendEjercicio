import prisma from "../config/prisma";

export const createEntryService = async (content: string) => {
  return await prisma.entry.create({
    data: { content },
  });
};

export const getEntriesService = async () => {
  return await prisma.entry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const updateEntryService = async (
  id: number,
  content: string
) => {
  return await prisma.entry.update({
    where: { id },
    data: { content },
  });
};

export const deleteEntryService = async (id: number) => {
  return await prisma.entry.delete({
    where: { id },
  });
};
