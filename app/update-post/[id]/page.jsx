import EditPromptPage from "@components/EditPromptPage";

export default async function page({ params }) {
  const { id } = params;
  return <EditPromptPage promptId={id} />;
}
