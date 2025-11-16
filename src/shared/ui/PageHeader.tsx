interface PageHeaderProps {
  title: string;
  description: string;
  content?: string;
}

const PageHeader = ({ title, description, content }: PageHeaderProps) => {
  return (
    <div className="text-center">
      <h1 className="ty-h1 mb-4">{title}</h1>
      <p className="ty-lead text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
      {content && (
        <div className="max-w-4xl mx-auto mt-8">
          <p className="ty-body text-muted-foreground">{content}</p>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
