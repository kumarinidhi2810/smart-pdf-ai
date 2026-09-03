import { Card, CardActionArea, Box, Typography, Avatar } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";

function QuickActionCard({
  title,
  description,
  icon: Icon,
  color,
  path,
}) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
  transition: "all .3s ease",

"&:hover": {
  transform: "translateY(-6px)",
  boxShadow: "0 20px 45px rgba(37,99,235,.12)",
}
      }}
    >
      <CardActionArea
        onClick={() => navigate(path)}
        sx={{
          p: "28px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Avatar
  sx={{
    width: 56,
    height: 56,
    bgcolor: `${color}15`,
    color: color,
  }}
>
  <Icon />
</Avatar>

<ArrowForwardRoundedIcon sx={{ color: "text.secondary" }} />        </Box>

        <Typography
          variant="h6"
          sx={{
            mt: 3,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default QuickActionCard;