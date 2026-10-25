import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";
import { useTranslation } from "react-i18next";

// ToolsPendingNotice tells a caller who just signed in to an MCP client that its
// tools, prompts and resources could not be discovered with the new credential.
// The credential is stored, so connecting to the client again from their MCP
// client retries.
export function ToolsPendingNotice({ clientName, error, className }: { clientName: string; error?: string; className?: string }) {
	const { t } = useTranslation("mcp");
	return (
		<Alert variant="warning" className={cn("text-left", className)} data-testid="mcp-sessions-tools-pending-alert">
			<TriangleAlert />
			<AlertTitle>{t("sessions.auth.toolsPendingTitle")}</AlertTitle>
			<AlertDescription>
				<p>{t("sessions.auth.toolsPendingBody", { name: clientName })}</p>
				{error && (
					<p className="font-mono text-xs break-all" data-testid="mcp-sessions-tools-pending-error">
						{error}
					</p>
				)}
			</AlertDescription>
		</Alert>
	);
}