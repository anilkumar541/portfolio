import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';
import ProjectInfoModal from '../project_info_modal/ProjectInfoModal';
import { useDisclosure } from '@mantine/hooks';
import { data } from 'autoprefixer';


export default function ProjectCard({project: {title, image, description, isLive, technologies, link, github}}) {
  
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
    <Card w="400px" shadow="lg" padding="sm" radius="lg" withBorder className='bg-bgColor border-primaryColor hover:!shadow-[0_0_10px_1px_#64FFDA] hover:scale-[1.01] cursor-pointer transition-transform duration-300 ease-in-out'>
      <Card.Section>
        <Image
          src={image}
          alt={title}
          className='h-[200px]'
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs" className='!text-justify'>
        <Text className='text-xl font-bold text-white'>{title}</Text>
        {
          isLive && <Badge variant="outline" color="red" className='text-primaryColor' rightSection={<Indicator color="lime" position="middle-start" size={5}></Indicator>}>Live</Badge>
        }
      </Group>

      <Group mb="xs" className='!text-justify flex flex-wrap'>
        {
          technologies.map((tech, index) => index <4 && <Badge key={tech} variant="light" color="#64FFDA" size='sm'>{tech}</Badge>)
        }  
      </Group> 

      <Text lineClamp={4} size="sm" c="dimmed">
        {description}
      </Text>

      <Button onClick={open} className='bg-primaryColor text-bgColor hover:bg-primaryColor hover:text-bgColor' fullWidth mt="md" radius="md">
        Show more
      </Button>
    </Card>

    <ProjectInfoModal opened={opened} close={close} title={title} image={image} description={description} isLive={isLive} link={link} github={github} technologies={technologies} />
    </>
  );
}





